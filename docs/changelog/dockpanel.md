# Changelog DockPanel

## 0.19.0 · 2026-10-12

- `daemon_token` node disimpan terenkripsi di database. Jalankan `php artisan migrate`.
- Console token membutuhkan permission `console.access`. Pengaturan schedule hanya untuk admin dan owner.
- Mengganti password mencabut sesi di perangkat lain.
- 2FA: recovery code yang bisa dibuat ulang, dan kode TOTP tidak bisa dipakai dua kali.
- Lisensi berubah ke AGPL-3.0.

## 0.18.2 · 2026-10-09

- Grafik mini CPU dan memory di kartu HUD (60 titik terakhir).
- Riwayat command di console, maksimal 50 per server.

## 0.18.1 · 2026-10-09

- Halaman Configuration node menampilkan `panel_url` dan `backup_directory`.
- Installer Wings menanyakan URL Panel dan membuka port API dan SFTP di `ufw`.
- SFTP membutuhkan Wings 0.5.0 ke atas.

## 0.18.0 · 2026-10-09

- Tampilan file manager dan HUD server dirombak, lebih nyaman di HP.
- Tombol New File.

## 0.17.x · 2026-10-05 sampai 2026-10-08

- **0.17.4**: Zip, ubah izin, dan unduh dari URL.
- **0.17.2**: Extract arsip. Batas upload Nginx dan PHP menjadi 256 MB.
- **0.17.1**: Menu Update Panel dan Update Wings di `install.sh`, cron scheduler otomatis, dan mode production.
- **0.17.0**: Database dibuat sendiri oleh user, rotate password, phpMyAdmin dengan single sign-on.

## 0.16.0 · 2026-10-04

- Restore backup dari tab Backups.
- Perintah `php artisan databases:sync`.

## 0.15.x · 2026-10-03

- Tab Backups, Network, Settings (username SFTP), dan Activity.
- Allocation yang diubah di Panel kini sampai ke container.

## 0.14.0 · 2026-10-03

- Security header di semua respons.
- Route bawaan `storage/{path}` dimatikan, dan reset password dibatasi 5 permintaan per menit.

