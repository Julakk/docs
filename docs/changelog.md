# Changelog

Ringkasan rilis terbaru. Changelog lengkap ada di repo masing-masing:
[DockPanel](https://github.com/Julakk/DockPanel/blob/main/CHANGELOG.md) dan [DockWings](https://github.com/Julakk/DockWings/blob/main/CHANGELOG.md).

## DockPanel

### 0.19.0 · 2026-10-12

- `daemon_token` node disimpan terenkripsi di database. Jalankan `php artisan migrate`.
- Console token membutuhkan permission `console.access`. Pengaturan schedule hanya untuk admin dan owner.
- Mengganti password mencabut sesi di perangkat lain.
- 2FA: recovery code yang bisa dibuat ulang, dan kode TOTP tidak bisa dipakai dua kali.
- Lisensi berubah ke AGPL-3.0.

### 0.18.2 · 2026-10-09

- Grafik mini CPU dan memory di kartu HUD (60 titik terakhir).
- Riwayat command di console, maksimal 50 per server.

### 0.18.1 · 2026-10-09

- Halaman Configuration node menampilkan `panel_url` dan `backup_directory`.
- Installer Wings menanyakan URL Panel dan membuka port API dan SFTP di `ufw`.
- SFTP membutuhkan Wings 0.5.0 ke atas.

### 0.18.0 · 2026-10-09

- Tampilan file manager dan HUD server dirombak, lebih nyaman di HP.
- Tombol New File.

### 0.17.x · 2026-10-05 sampai 2026-10-08

- **0.17.4**: Zip, ubah izin, dan unduh dari URL.
- **0.17.2**: Extract arsip. Batas upload Nginx dan PHP menjadi 256 MB.
- **0.17.1**: Menu Update Panel dan Update Wings di `install.sh`, cron scheduler otomatis, dan mode production.
- **0.17.0**: Database dibuat sendiri oleh user, rotate password, phpMyAdmin dengan single sign-on.

### 0.16.0 · 2026-10-04

- Restore backup dari tab Backups.
- Perintah `php artisan databases:sync`.

### 0.15.x · 2026-10-03

- Tab Backups, Network, Settings (username SFTP), dan Activity.
- Allocation yang diubah di Panel kini sampai ke container.

### 0.14.0 · 2026-10-03

- Security header di semua respons.
- Route bawaan `storage/{path}` dimatikan, dan reset password dibatasi 5 permintaan per menit.

## DockWings

## [0.5.4] - 2026-10-13

### Added

- `DELETE /api/servers/{uuid}?purge=1` ikut menghapus folder data server. Hanya untuk uuid kanonik, dan folder yang berupa symlink ditolak. Respons membawa `purged: true` atau `false`. Kalau penghapusan folder gagal, server tetap tercatat supaya bisa dicoba lagi.

### Changed

- Tanpa `purge`, perilaku lama tetap: container dihapus, folder data dipertahankan.
- Versi daemon jadi 0.5.4.

## [0.5.3] - 2026-10-13

### Fixed

- Start command dijalankan lewat `/bin/bash` kalau image punya, dan jatuh ke `/bin/sh` kalau tidak. Sebelumnya selalu `/bin/sh`, sehingga egg yang memakai `[[ ... ]]` (misalnya Python dan Node.js generic) gagal dengan pesan `[[: not found` di console.

### Changed

- Berlaku untuk container yang dibuat setelah update. Container yang sudah ada tidak berubah.
- Versi daemon jadi 0.5.3.

### 0.5.2 · 2026-10-12

- HTTP server memiliki timeout, dan Wings mencatat peringatan jika SSL tidak aktif.
- Lisensi berubah ke AGPL-3.0.

### 0.5.1 · 2026-10-09

- Endpoint `resources` menambah `uptime_ms`, `network_rx_bytes`, dan `network_tx_bytes`.

### 0.5.0 · 2026-10-09

- Server SFTP bawaan dengan verifikasi login ke Panel, folder terkunci per server, dan host key ed25519 otomatis.
- Config baru `panel_url`.

### 0.4.x · 2026-10-03 sampai 2026-10-08

- **0.4.8**: compress, chmod, dan pull dari URL.
- **0.4.6**: extract arsip dengan proteksi zip-slip.
- **0.4.3** dan **0.4.5**: script install egg di container sementara, dengan status yang bertahan setelah restart.
- **0.4.2**: restore backup.
- **0.4.1**: backup dan perubahan allocation.
- **0.4.0**: restart policy `unless-stopped`.

### 0.3.0 · 2026-10-03

- `DockerEnvironment` asli menggantikan stub, plus console WebSocket, file manager API, dan endpoint resources.

### 0.1.0 dan 0.2.x

- Kerangka project Go, auth Bearer token, TLS opsional, dan `GET /api/system`.
