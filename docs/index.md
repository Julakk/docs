---
layout: home

hero:
  name: DockPanel
  text: Panel game server self-hosted
  tagline: Kelola game server lewat Docker dengan panel Laravel dan daemon Go. Terinspirasi Pterodactyl, dibangun dari nol.
  image:
    src: /icon.png
    alt: Logo DockPanel
  actions:
    - theme: brand
      text: Mulai install
      link: /guide/install-panel
    - theme: alt
      text: Apa itu DockPanel?
      link: /guide/what-is
    - theme: alt
      text: GitHub
      link: https://github.com/Julakk/DockPanel

features:
  - icon:
      src: /icons/bolt.svg
    title: Install satu perintah
    details: Skrip install.sh memasang Panel (PHP, MariaDB, Nginx) atau node Wings (Docker + Go) di VPS Ubuntu, dan juga menangani update.
    link: /guide/install-panel
    linkText: Panduan install
  - icon:
      src: /icons/folder.svg
    title: File manager lengkap
    details: Upload, edit, Zip, Extract, ubah izin, dan unduh file dari URL langsung dari browser, termasuk di HP.
  - icon:
      src: /icons/drive.svg
    title: Backup dan restore
    details: Buat backup tar.gz dengan checksum SHA-256, unduh, lalu restore saat server mati. Jika restore gagal, file server tidak berubah.
    link: /guide/backups
    linkText: Soal backup
  - icon:
      src: /icons/plug.svg
    title: SFTP bawaan
    details: Wings punya server SFTP sendiri. Login diverifikasi ke Panel, dan tiap pengguna terkunci di folder servernya.
    link: /guide/sftp
    linkText: Soal SFTP
  - icon:
      src: /icons/shield.svg
    title: Keamanan berlapis
    details: 2FA TOTP dengan recovery code dan anti-replay, security header, daemon_token terenkripsi, dan token console per permission.
    link: /guide/two-factor
    linkText: Soal 2FA
  - icon:
      src: /icons/database.svg
    title: Database per server
    details: Buat database MySQL sendiri dari panel, rotate password, dan masuk ke phpMyAdmin lewat single sign-on sekali pakai.
---

<div class="badges">
  <span class="badge"><b>DockPanel</b><i>0.19.0</i></span>
  <span class="badge"><b>DockWings</b><i>0.5.2</i></span>
  <span class="badge"><b>lisensi</b><i>AGPL-3.0</i></span>
</div>

## Install dalam satu perintah

Jalankan di VPS Ubuntu sebagai root, lalu pilih menu yang diinginkan:

```bash
bash <(curl -s https://raw.githubusercontent.com/Julakk/DockPanel/main/install.sh)
```

| Menu | Fungsi |
| ---- | ------ |
| 1 | Install Panel (PHP, MariaDB, Nginx) |
| 2 | Install node Wings (Docker + Go) |
| 3 | Update Panel |
| 4 | Update Wings |

Baca [panduan instalasi Panel](/guide/install-panel) dan [instalasi Wings](/guide/install-wings) untuk langkah lengkapnya. Kalau ada masalah, lihat [Troubleshooting dan FAQ](/guide/troubleshooting).
