# Troubleshooting dan FAQ

## Panel error cURL 35 saat menghubungi Wings

Scheme node di Panel harus cocok dengan pengaturan SSL Wings: `http` jika `ssl.enabled` bernilai false, dan `https` jika true. Samakan keduanya, lalu coba lagi. Lihat [Konfigurasi Wings](/guide/configuration).

## Panel tidak bisa terhubung ke node

Semua request ke Wings memakai Bearer token. Pastikan `auth_token` di `config.json` Wings sama persis dengan `daemon_token` node di Panel (ada di halaman Configuration node). Token yang berbeda akan ditolak.

## SFTP tidak bisa login atau tidak jalan

- `panel_url` di `config.json` harus terisi. Jika kosong, SFTP tidak dijalankan.
- Butuh Wings v0.5.0 ke atas. Lihat [kompatibilitas versi](/guide/compatibility).
- Port SFTP (default `2022`, diatur lewat `sftp_addr`) harus terbuka di firewall. Installer membukanya otomatis jika `ufw` aktif.
- Pakai username SFTP dari tab **Settings** pada halaman server.
- Subuser dengan akses read-only tidak bisa menulis file lewat SFTP.
- Kalau salah format username berkali-kali, IP kamu bisa diblokir sementara oleh fail2ban (hanya kalau admin memasangnya, lihat [Mengamankan VPS](/guide/hardening)). Tunggu blokirnya berakhir atau minta admin melepasnya.

## Upload file gagal dengan Error 413

Batas upload Nginx dan PHP dinaikkan ke 256 MB sejak Panel v0.17.2. Pastikan Panel sudah di versi itu atau lebih baru. Jika masih terjadi di instalasi lama, periksa `client_max_body_size` di Nginx serta `upload_max_filesize` dan `post_max_size` di PHP. Batas per file dari Wings tetap 100 MB.

## Tombol Extract, Zip, atau Dari URL tidak berfungsi

- Tiap fitur butuh versi Wings minimum. Lihat tabel di [kompatibilitas versi](/guide/compatibility).
- Extract mendukung `.zip`, `.tar`, `.tar.gz`, dan `.tgz`. Format `.rar` belum didukung.
- Dari URL hanya menerima link http/https, maksimal 100 MB. Alamat loopback, privat, dan IP host sendiri diblokir.

## Restore backup ditolak

- Server harus dalam keadaan mati.
- Start dan restart ditolak selama restore berjalan.
- Restore butuh Wings v0.4.2 ke atas.

Lihat [Backup](/guide/backups).

## Backup tidak bisa dibuat

Cek `backup_limit` server. Nilai `0` mematikan backup, dan defaultnya 3. Hapus backup lama jika batasnya sudah tercapai.

## Install server (egg) gagal

Status dan log install bisa dilihat dari Panel. Jika daemon sempat mati saat install berjalan, statusnya menjadi `failed` dan install perlu diulang. Kalau script egg gagal, `exit_code` script akan ikut tercatat.

## Console atau akses fitur ditolak untuk subuser

Sejak Panel v0.19.0, console token membutuhkan permission `console.access`. Berikan permission itu ke subuser yang membutuhkannya.

## Error database setelah update Panel

Jalankan `php artisan migrate` di folder Panel. Beberapa rilis menambah kolom atau tabel dan juga punya langkah tambahan. Baca catatan versinya di [changelog](/changelog).

## FAQ

**Bisakah Wings dijalankan di Termux atau Android?**
Untuk menjalankan game server, tidak. Docker tidak bisa berjalan di sana. Wings tetap bisa dibuild dan dites, tapi servernya harus dijalankan di VPS Linux.

**Apa lisensi DockPanel dan DockWings?**
AGPL-3.0, sejak Panel v0.19.0 dan Wings v0.5.2.

**Panel dulu atau Wings dulu saat update?**
Panel dulu, lalu Wings. Lihat [Update](/guide/update).

**Egg dari Pterodactyl bisa dipakai?**
Bisa. Import Egg menerima JSON dengan format yang kompatibel dengan Pterodactyl.
