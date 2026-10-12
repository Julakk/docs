# Konfigurasi Wings

Wings dikonfigurasi lewat `config.json` (salin dari `config.example.json`).

## Field penting

| Field | Keterangan |
| ----- | ---------- |
| `auth_token` | Isi dengan `daemon_token` yang dibuat Panel saat Node dibuat. Semua request ke Wings memakai header `Authorization: Bearer <token>`. |
| `panel_url` | URL Panel. Dipakai Wings untuk memverifikasi login SFTP. Jika kosong, SFTP tidak dijalankan. |
| `sftp_addr` | Alamat dan port SFTP. Default `:2022`. |
| `backup_directory` | Folder penyimpanan backup. Default `/var/lib/dockwings/backups`. Opsional. |
| `ssl` | Blok TLS opsional (`enabled`, `cert`, `key`). |

::: details Contoh blok ssl
```json
{
  "ssl": {
    "enabled": true,
    "cert": "/etc/letsencrypt/live/node.example.com/fullchain.pem",
    "key": "/etc/letsencrypt/live/node.example.com/privkey.pem"
  }
}
```
:::

## TLS

Jika `ssl.enabled` diaktifkan, scheme node di Panel harus `https`. Mengaktifkan `ssl.enabled` tanpa `cert` atau `key` ditolak saat startup dengan pesan error yang jelas. Tanpa SSL, Wings menulis peringatan di log.

## Halaman Configuration di Panel

Di Panel, halaman Configuration pada node menampilkan `panel_url` dan `backup_directory`, dan memberi peringatan jika `APP_URL` tidak memakai https.

## Pengaturan Panel

Pengaturan umum Panel (nama perusahaan, kewajiban 2FA, bahasa default) ada di halaman Settings admin. Konfigurasi dasar aplikasi ada di file `.env`.
