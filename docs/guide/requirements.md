# Persyaratan dan OS yang didukung

![OS yang didukung](/os-support.png)

## Sistem operasi

Installer (`install.sh`) mengecek OS sebelum jalan.

| OS | Status | Catatan |
|---|---|---|
| Ubuntu 24.04 LTS | Didukung, diuji | Satu-satunya yang resmi |
| Ubuntu versi lain | Bisa dicoba | Installer memberi peringatan dan menanyakan apakah mau lanjut |
| Debian dan distro lain | Pasang manual | Installer didesain untuk Ubuntu. Instalasi Panel memakai PPA `ondrej/php`, yang khusus Ubuntu, jadi langkah itu tidak cocok di Debian |
| Termux, Android | Tidak didukung | Installer menolak berjalan. Docker tidak bisa jalan di Termux |
| Windows | Tidak didukung | Installer berupa skrip bash untuk Linux |

::: warning Soal Debian
Untuk Wings, kebutuhannya cuma Docker, Go, dan systemd, jadi kemungkinan bisa dipasang manual di Debian. Itu belum diuji. Untuk Panel, PHP 8.3 harus dipasang dari sumber lain.
:::

## Jenis server

| Jenis | Status |
|---|---|
| VPS virtualisasi penuh (KVM) | Didukung |
| Dedicated server / bare metal | Didukung |
| VPS berbasis OpenVZ atau LXC | Umumnya tidak bisa, karena Docker butuh kernel penuh |
| Shared hosting dan cPanel | Tidak bisa, installer butuh akses root |

Daftar ini mengikuti syarat teknis, bukan daftar provider. Siapa pun penyedianya, VPS yang memenuhi syarat di atas seharusnya cocok.

## Yang sudah diuji

| Provider | OS | Virtualisasi | Dipakai untuk |
|---|---|---|---|
| Akamai (Linode) | Ubuntu 24.04 | KVM | Panel, Wings, dan satu server SA-MP di satu mesin |

Sudah mencoba di provider lain? [Buka issue](https://github.com/Julakk/docs/issues) supaya daftar ini bertambah.

## Syarat lain

- **Akses root.** Installer menolak berjalan tanpa root.
- **Arsitektur Wings:** `amd64` dan `arm64`.
- **Domain** yang mengarah ke VPS Panel, dengan HTTPS (Let's Encrypt tersedia di installer).
- **Port firewall.** Beberapa provider punya firewall di luar VPS (security group). Port 8080 (API Wings), 2022 (SFTP), dan port game harus dibuka di sana juga. Lihat [Mengamankan VPS](/guide/hardening).
- **Resource.** Tidak ada angka minimum resmi. Konfigurasi yang diuji berjalan di sekitar 4 GB RAM dan 2 vCPU.

## Cek VPS kamu sebelum install

```bash
systemd-detect-virt
. /etc/os-release && echo "$PRETTY_NAME"
uname -m
```

Hasil `kvm` (atau `qemu`, `vmware`) berarti Docker bisa jalan. `openvz` atau `lxc` berarti jangan lanjut. `uname -m` harus `x86_64` atau `aarch64`.
