# Changelog DockWings

## [0.5.4] - 2026-10-13

## Added

- `DELETE /api/servers/{uuid}?purge=1` ikut menghapus folder data server. Hanya untuk uuid kanonik, dan folder yang berupa symlink ditolak. Respons membawa `purged: true` atau `false`. Kalau penghapusan folder gagal, server tetap tercatat supaya bisa dicoba lagi.

## Changed

- Tanpa `purge`, perilaku lama tetap: container dihapus, folder data dipertahankan.
- Versi daemon jadi 0.5.4.

## [0.5.3] - 2026-10-13

## Fixed

- Start command dijalankan lewat `/bin/bash` kalau image punya, dan jatuh ke `/bin/sh` kalau tidak. Sebelumnya selalu `/bin/sh`, sehingga egg yang memakai `[[ ... ]]` (misalnya Python dan Node.js generic) gagal dengan pesan `[[: not found` di console.

## Changed

- Berlaku untuk container yang dibuat setelah update. Container yang sudah ada tidak berubah.
- Versi daemon jadi 0.5.3.

## 0.5.2 · 2026-10-12

- HTTP server memiliki timeout, dan Wings mencatat peringatan jika SSL tidak aktif.
- Lisensi berubah ke AGPL-3.0.

## 0.5.1 · 2026-10-09

- Endpoint `resources` menambah `uptime_ms`, `network_rx_bytes`, dan `network_tx_bytes`.

## 0.5.0 · 2026-10-09

- Server SFTP bawaan dengan verifikasi login ke Panel, folder terkunci per server, dan host key ed25519 otomatis.
- Config baru `panel_url`.

## 0.4.x · 2026-10-03 sampai 2026-10-08

- **0.4.8**: compress, chmod, dan pull dari URL.
- **0.4.6**: extract arsip dengan proteksi zip-slip.
- **0.4.3** dan **0.4.5**: script install egg di container sementara, dengan status yang bertahan setelah restart.
- **0.4.2**: restore backup.
- **0.4.1**: backup dan perubahan allocation.
- **0.4.0**: restart policy `unless-stopped`.

## 0.3.0 · 2026-10-03

- `DockerEnvironment` asli menggantikan stub, plus console WebSocket, file manager API, dan endpoint resources.

## 0.1.0 dan 0.2.x

- Kerangka project Go, auth Bearer token, TLS opsional, dan `GET /api/system`.
