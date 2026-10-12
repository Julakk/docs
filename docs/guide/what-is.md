# Apa itu DockPanel?

**DockPanel** adalah panel manajemen game server self-hosted yang dibangun dengan Laravel dan terinspirasi dari Pterodactyl. **DockWings** adalah daemon berbahasa Go yang berjalan di setiap node dan mengontrol container Docker untuk game server.

Pola kerjanya sama seperti Panel dan Wings di Pterodactyl:

```
Browser ──► DockPanel (Laravel) ──HTTP + Bearer token──► DockWings (Go) ──► Docker
                                         ▲                      │
                                         └──── SFTP auth ───────┘
```

- **DockPanel** menyimpan data (user, node, server, egg, allocation) dan menyediakan antarmuka web serta API.
- **DockWings** menerima perintah dari Panel: membuat server, power action, console, file manager, backup, dan SFTP.

## Fitur utama

**Admin**

- CRUD Node, Allocation, Location, Nest, Egg, Server, dan User
- Import Egg dalam format JSON yang kompatibel dengan Pterodactyl
- Application API (token Sanctum), Database Host, dan Mount
- Masa aktif server dengan auto-suspend saat expired dan pengingat email H-3
- Pengaturan panel: nama, kewajiban 2FA, dan bahasa default

**Client area**

- Halaman server dengan tab Console, Files, Databases, Schedules, Users, Backups, Network, Startup, Settings, dan Activity
- Subuser dengan permission granular
- API credentials pribadi

**Keamanan**

- Two-Factor Authentication (TOTP) dengan recovery code
- Activity Log
- Security header di semua respons

## Lisensi

DockPanel dan DockWings dirilis di bawah **AGPL-3.0** sejak Panel v0.19.0 dan Wings v0.5.2.

## Selanjutnya

1. [Install Panel](/guide/install-panel) di VPS.
2. [Install Wings](/guide/install-wings) di node yang akan menjalankan game server.
3. Cek [kompatibilitas versi](/guide/compatibility) supaya Panel dan Wings cocok.
