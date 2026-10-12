# Mengamankan VPS

VPS yang menjalankan Panel dan Wings dipindai bot setiap hari. Port SFTP dan SSH adalah yang paling sering ditembak. Halaman ini merangkum langkah yang perlu dilakukan setelah instalasi.

## Port yang perlu terbuka

| Port | Fungsi | Catatan |
|---|---|---|
| 22 | SSH | Batasi dengan kunci SSH, lihat di bawah |
| 80 / 443 | Panel | Pakai HTTPS |
| 8080 | API dan console Wings | Terlindungi token. Batasi ke IP Panel kalau console tidak diakses langsung dari browser pemain |
| 2022 | SFTP | Harus terbuka untuk pemain, jadi lindungi dengan fail2ban |
| Port game | Pemain terhubung | Sesuai allocation server |

Cek aturan yang aktif:

```bash
ufw status numbered
```

## Blokir IP penembak

Aturan `deny` harus berada **di atas** aturan `allow`, jadi pakai `insert 1`:

```bash
ufw insert 1 deny from 203.0.113.50
```

Ganti IP contoh dengan IP yang ingin diblokir.

## fail2ban untuk SFTP

Setiap login SFTP yang ditolak dicatat Panel di `storage/logs/laravel.log`, misalnya:

```text
sftp.auth ditolak {"reason":"format username","node":1,"ip":"203.0.113.50"}
```

fail2ban bisa membaca baris itu dan memblokir IP yang berulang kali gagal.

::: warning Hanya untuk Panel dan Wings di server yang sama
Konfigurasi ini membaca log Panel dan memblokir lewat firewall mesin tempat fail2ban berjalan. Kalau Wings ada di VPS lain, pemblokiran terjadi di mesin Panel, bukan di node yang membuka port 2022.
:::

Pasang fail2ban:

```bash
apt install -y fail2ban
```

Buat filter yang hanya menghitung dua alasan pertama:

```bash
cat > /etc/fail2ban/filter.d/dockpanel-sftp.conf << 'EOT'
[Definition]
failregex = sftp\.auth ditolak \{"reason":"(format username|user nggak ada)".*"ip":"<HOST>"
datepattern = ^\[%%Y-%%m-%%d %%H:%%M:%%S\]
EOT
```

Buat jail. Sesuaikan `logpath` dengan lokasi Panel kamu:

```bash
cat > /etc/fail2ban/jail.d/dockpanel-sftp.local << 'EOT'
[dockpanel-sftp]
enabled = true
port = 2022
filter = dockpanel-sftp
logpath = /var/www/dockpanel/storage/logs/laravel.log
backend = polling
logtimezone = UTC+0700
maxretry = 10
findtime = 600
bantime = 3600
ignoreip = 127.0.0.1/8 ::1
EOT
```

Beberapa hal penting dari konfigurasi itu:

- **`backend = polling`** wajib. Di Ubuntu 24.04 backend bawaan adalah `systemd`, yang mengabaikan `logpath`, sehingga jail tidak pernah membaca file log.
- **`logtimezone`** harus sama dengan `APP_TIMEZONE` Laravel (default Panel: `Asia/Jakarta`, jadi `UTC+0700`). Kalau berbeda, waktu di log bisa terbaca meleset dari jam server (UTC).
- **`maxretry = 10`, `bantime = 3600`** cukup ketat untuk bot yang menembak tiap beberapa detik, tapi tidak langsung mengunci pemain yang sekali salah ketik username.
- Filter ini mengandalkan teks pesan log di atas. Kalau Panel kelak mengubahnya, filter perlu disesuaikan.
- Jangan ganti `LOG_CHANNEL` Laravel ke `daily`, karena nama file log berubah tiap hari dan jail berhenti membaca.

Tambahkan IP server kamu sendiri ke `ignoreip` kalau Panel pernah menguji SFTP dari mesin yang sama. Jangan tambahkan IP pemain atau IP yang belum kamu pastikan milikmu.

Aktifkan dan uji:

```bash
fail2ban-client -t
systemctl restart fail2ban
sleep 8
fail2ban-client status dockpanel-sftp
```

Di bagian `File list` harus ada `laravel.log`. Baru setelah itu angka `Total failed` mulai bertambah.

Untuk melepas blokir manual:

```bash
fail2ban-client set dockpanel-sftp unbanip 203.0.113.50
```

## Berhenti login sebagai root

Buat user biasa dengan kunci SSH, lalu matikan login root dan login password.

```bash
adduser deploy
usermod -aG sudo deploy
mkdir -p /home/deploy/.ssh
cp /root/.ssh/authorized_keys /home/deploy/.ssh/authorized_keys
chown -R deploy:deploy /home/deploy/.ssh
chmod 700 /home/deploy/.ssh
chmod 600 /home/deploy/.ssh/authorized_keys
```

::: danger Tes dulu sebelum menutup akses root
Buka sesi SSH **baru** dan pastikan `ssh deploy@IP_SERVER` berhasil dengan kunci, dan `sudo -i` bekerja. Jangan tutup sesi root yang lama sampai tes itu lolos. Kalau tidak, kamu bisa terkunci dari servermu sendiri.
:::

Setelah tes lolos:

```bash
cat > /etc/ssh/sshd_config.d/99-hardening.conf << 'EOT'
PermitRootLogin no
PasswordAuthentication no
EOT

sshd -t && systemctl reload ssh
sshd -T | grep -E "permitrootlogin|passwordauthentication"
```

Perintah terakhir menampilkan nilai yang benar-benar berlaku. Beberapa image VPS punya file lain di `/etc/ssh/sshd_config.d/` (misalnya `50-cloud-init.conf`) yang menyalakan lagi login password, jadi pastikan hasilnya `no` untuk keduanya.

Ubuntu sudah menyalakan jail `sshd` di fail2ban secara bawaan, jadi percobaan brute force ke port 22 otomatis diblokir.

## Setelah ini

- Reboot saat ada pembaruan kernel (`apt` memberi tahu lewat pesan *Pending kernel upgrade*). Pastikan `docker`, `dockwings`, dan `fail2ban` berstatus `enabled` supaya semuanya naik sendiri.
- Aktifkan [Two-Factor](/guide/two-factor) untuk semua akun admin.
- Pantau `fail2ban-client status dockpanel-sftp` sesekali. Kalau ada pelanggan yang tidak bisa SFTP, cek dulu apakah IP-nya terblokir.
- Lihat juga [Troubleshooting dan FAQ](/guide/troubleshooting).
