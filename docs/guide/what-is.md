# Apa itu DockPanel?

**DockPanel** adalah panel manajemen game server self-hosted yang dibangun dengan Laravel dan terinspirasi dari Pterodactyl. **DockWings** adalah daemon berbahasa Go yang berjalan di setiap node dan mengontrol container Docker untuk game server.

Pola kerjanya sama seperti Panel dan Wings di Pterodactyl:

<div class="diagram">
<svg viewBox="0 0 360 400" role="img" aria-label="Alur: Browser ke DockPanel, DockPanel ke DockWings lewat HTTP dengan Bearer token, DockWings ke Docker" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="dg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<rect class="dg-box" x="80" y="10" width="200" height="56" rx="10"/>
<text class="dg-title" x="180" y="36">Browser</text>
<text class="dg-sub" x="180" y="54">admin dan pengguna</text>
<line class="dg-line" x1="180" y1="68" x2="180" y2="114" marker-end="url(#dg-arrow)"/>
<text class="dg-label" x="194" y="96">web</text>
<rect class="dg-box-brand" x="80" y="118" width="200" height="56" rx="10"/>
<text class="dg-title" x="180" y="144">DockPanel</text>
<text class="dg-sub" x="180" y="162">Laravel, database, web dan API</text>
<line class="dg-line" x1="180" y1="176" x2="180" y2="222" marker-end="url(#dg-arrow)"/>
<text class="dg-label" x="194" y="204">HTTP + Bearer token</text>
<rect class="dg-box-brand" x="80" y="226" width="200" height="56" rx="10"/>
<text class="dg-title" x="180" y="252">DockWings</text>
<text class="dg-sub" x="180" y="270">Go, satu di tiap node</text>
<line class="dg-line" x1="180" y1="284" x2="180" y2="330" marker-end="url(#dg-arrow)"/>
<text class="dg-label" x="194" y="312">Docker CLI</text>
<rect class="dg-box" x="80" y="334" width="200" height="56" rx="10"/>
<text class="dg-title" x="180" y="360">Docker</text>
<text class="dg-sub" x="180" y="378">container game server</text>
</svg>
</div>

- **DockPanel** menyimpan data (user, node, server, egg, allocation) dan menyediakan antarmuka web serta API.
- **DockWings** menerima perintah dari Panel: membuat server, power action, console, file manager, backup, dan SFTP.

Untuk SFTP, arah verifikasinya terbalik: Wings memeriksa login ke Panel lewat `POST /api/remote/sftp/auth`.

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
