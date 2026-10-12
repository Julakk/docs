# API Wings

Panel berkomunikasi dengan Wings lewat HTTP API. Semua endpoint kecuali `/health` membutuhkan header:

```
Authorization: Bearer <auth_token>
```

`auth_token` di `config.json` Wings harus sama dengan `daemon_token` node di Panel. Perbandingan token memakai `subtle.ConstantTimeCompare`.

::: info
Halaman ini dirangkum dari changelog DockWings dan belum lengkap. Path file manager (list, baca, tulis, mkdir, rename, hapus) belum dicantumkan di sini. Periksa kode di `internal` pada repo DockWings untuk rutenya.
:::

## Umum

| Method | Path | Keterangan |
| ------ | ---- | ---------- |
| GET | `/health` | Cek daemon hidup. |
| GET | `/api/system` | Versi daemon, OS, arsitektur, jumlah CPU, dan jumlah server. |

## Server

| Method | Path | Keterangan |
| ------ | ---- | ---------- |
| POST | `/api/servers` | Buat server baru. |
| DELETE | `/api/servers/{uuid}` | Hapus server. |
| POST | `/api/servers/{uuid}/power` | `start`, `stop`, `restart`, atau `kill`. |
| POST | `/api/servers/{uuid}/commands` | Kirim command ke console. |
| GET | `/api/servers/{uuid}/resources` | CPU, memori, disk, `uptime_ms`, `network_rx_bytes`, `network_tx_bytes`. Nilai 0 jika server mati. |
| PUT | `/api/servers/{uuid}/allocations` | Simpan allocation baru dan buat ulang container. Folder data tetap utuh. |

Console real-time memakai WebSocket untuk streaming log dan pengiriman command dalam satu koneksi.

## Install

| Method | Path | Keterangan |
| ------ | ---- | ---------- |
| POST | `/api/servers/{uuid}/install` | Jalankan script install egg di container sementara, di background. Membalas `202`, atau `409` jika server masih berjalan. Batas waktu 30 menit. |
| GET | `/api/servers/{uuid}/install` | Status: `idle`, `running`, `completed`, atau `failed`, beserta `error`, `log`, dan `exit_code` bila ada. Status bertahan setelah daemon restart. |

## Backup dan restore

| Method | Path | Keterangan |
| ------ | ---- | ---------- |
| POST | `/api/servers/{uuid}/backups` | Buat backup di background (`202`). |
| GET | `/api/servers/{uuid}/backups/{backup}` | Status, ukuran, dan checksum SHA-256. |
| GET | `/api/servers/{uuid}/backups/{backup}/download` | Unduh arsip. |
| DELETE | `/api/servers/{uuid}/backups/{backup}` | Hapus backup. |
| POST | `/api/servers/{uuid}/backups/{backup}/restore` | Restore di background (`202`). Server harus mati, jika tidak `409`. |
| GET | `/api/servers/{uuid}/restore` | Status: `idle`, `restoring`, `completed`, atau `failed`. |

## Operasi file

| Method | Path | Keterangan |
| ------ | ---- | ---------- |
| POST | `/api/servers/{uuid}/files/extract` | Ekstrak `.zip`, `.tar`, `.tar.gz`, `.tgz` ke folder arsip. `.rar` ditolak. |
| POST | `/api/servers/{uuid}/files/compress` | Buat `.zip`. Batas 1 GiB dan 20.000 file. |
| POST | `/api/servers/{uuid}/files/chmod` | Jadikan executable (`0755`) atau biasa (`0644`). |
| POST | `/api/servers/{uuid}/files/pull` | Unduh dari URL http/https, maksimal 100 MB dan 5 redirect. Alamat loopback, privat, link-local, CGNAT, dan IP host sendiri diblokir. |

## Endpoint di sisi Panel

| Method | Path | Keterangan |
| ------ | ---- | ---------- |
| POST | `/api/remote/sftp/auth` | Dipanggil Wings untuk memverifikasi login SFTP. |
