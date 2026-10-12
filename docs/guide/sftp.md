# SFTP

Wings v0.5.0 ke atas punya server SFTP bawaan, dan Panel v0.18.1 ke atas menyiapkan konfigurasinya lewat installer.

## Cara kerja

- Server SFTP berjalan di port `sftp_addr` (default `:2022`).
- Saat login, Wings memverifikasi akun ke Panel lewat `POST /api/remote/sftp/auth`. Akun, password, dan hak akses subuser (read-only atau tulis) mengikuti aturan Panel.
- Username SFTP ada di tab **Settings** pada halaman server.

## Syarat

- `panel_url` di `config.json` harus terisi. Jika kosong, SFTP tidak dijalankan.
- Port SFTP harus terbuka di firewall. Installer membukanya otomatis jika `ufw` aktif.

## Batasan keamanan

- Setiap pengguna dikunci di folder servernya. Path `..` dan symlink yang keluar dari folder ditolak.
- Pembuatan symlink dan hardlink tidak diizinkan. `chmod` hanya boleh `0755` atau `0644`.
- Hanya subsystem `sftp`. Shell, exec, dan port forwarding ditolak.
- Maksimal 128 koneksi bersamaan, dengan batas 30 detik untuk handshake dan login.

## Host key

Host key ed25519 dibuat otomatis di `/var/lib/dockwings/sftp_host_ed25519_key` (mode 600) dan dipakai ulang setelah restart. Jangan hapus file ini kecuali Anda siap mengubah fingerprint yang dilihat client.
