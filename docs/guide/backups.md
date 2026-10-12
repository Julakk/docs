# Backup

Backup dikelola dari tab **Backups** pada halaman server.

## Membuat dan mengelola

- Buat backup dengan nama opsional. Status diperbarui otomatis setiap 4 detik selama proses berjalan.
- Unduh atau hapus backup dari daftar.
- Batas jumlah backup per server diatur lewat `backup_limit` (default 3). Isi `0` untuk mematikan backup.

Wings menyimpan arsip `tar.gz` di `backup_directory` (default `/var/lib/dockwings/backups`) dan mencatat checksum SHA-256.

::: warning
Backup server yang sedang berjalan tidak dijamin konsisten. Untuk data yang penting, hentikan server dulu.
:::

## Restore

Restore tersedia sejak Panel v0.16.0 dan membutuhkan Wings v0.4.2 ke atas.

- Server harus dalam keadaan **mati**. Jika tidak, restore ditolak.
- Wings memverifikasi checksum SHA-256, mengekstrak arsip ke folder sementara, lalu menukarnya dengan folder server.
- Jika ada kegagalan, folder server asli tidak berubah.
- Entri dengan path berbahaya ditolak, dan symlink serta file spesial dilewati.
- Start dan restart ditolak selama restore berjalan.
