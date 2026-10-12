# Instalasi Panel

## Install di VPS (produksi)

Jalankan sebagai root di VPS Ubuntu:

```bash
bash <(curl -s https://raw.githubusercontent.com/Julakk/DockPanel/main/install.sh)
```

Pilih **1** untuk memasang Panel. Installer memasang PHP, MariaDB, dan Nginx.

Beberapa hal yang dilakukan installer:

- Menjalankan Panel dalam mode production (`APP_ENV=production`, `APP_DEBUG=false`) dengan file `.env` berizin 640.
- Memakai `https` di `APP_URL` hanya jika Anda memilih SSL.
- Memasang cron scheduler Laravel di `/etc/cron.d/dockpanel`. Scheduler ini dipakai antara lain untuk suspend otomatis server yang sudah expired.
- Mengatur batas upload Nginx dan PHP ke 256 MB.

::: tip
Pasang SSL. Console, token API, dan login lewat jaringan publik sebaiknya tidak berjalan di http biasa.
:::

## Setup development

Untuk mencoba di komputer sendiri dengan SQLite:

```bash
git clone https://github.com/Julakk/DockPanel.git
cd DockPanel
composer install
cp .env.example .env
touch database/database.sqlite
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

## Setelah install

1. Login sebagai admin.
2. Buat **Location**, lalu **Node**. Saat Node dibuat, Panel menghasilkan `daemon_token` yang dibutuhkan Wings.
3. Tambahkan **Allocation** (IP:port) ke node.
4. [Install Wings](/guide/install-wings) di node tersebut.
5. Buat **Server** dari menu admin.
