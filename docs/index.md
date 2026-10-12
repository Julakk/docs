---
layout: home

hero:
  name: DockPanel
  text: Panel game server self-hosted
  tagline: Kelola game server lewat Docker dengan panel Laravel dan daemon Go. Terinspirasi Pterodactyl, dibangun dari nol.
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
  - title: Install satu perintah
    details: Skrip install.sh memasang Panel (PHP, MariaDB, Nginx) atau node Wings (Docker + Go) di VPS Ubuntu, dan juga menangani update.
  - title: File manager lengkap
    details: Upload, edit, Zip, Extract, ubah izin, dan unduh file dari URL langsung dari browser, termasuk di HP.
  - title: Backup dan restore
    details: Buat backup tar.gz dengan checksum SHA-256, unduh, lalu restore saat server mati. Jika restore gagal, file server tidak berubah.
  - title: SFTP bawaan
    details: Wings punya server SFTP sendiri. Login diverifikasi ke Panel, dan tiap pengguna terkunci di folder servernya.
  - title: Keamanan berlapis
    details: 2FA TOTP dengan recovery code dan anti-replay, security header, daemon_token terenkripsi, dan token console per permission.
  - title: Database per server
    details: Buat database MySQL sendiri dari panel, rotate password, dan masuk ke phpMyAdmin lewat single sign-on sekali pakai.
---
