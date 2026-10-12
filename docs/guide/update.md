# Update

Menu update ada di `install.sh` sejak Panel v0.17.1.

```bash
bash <(curl -s https://raw.githubusercontent.com/Julakk/DockPanel/main/install.sh)
```

| Menu | Fungsi |
| ---- | ------ |
| 3 | Update Panel |
| 4 | Update Wings |

**Update Wings** membangun binary ke file sementara. Jika service baru gagal berjalan, installer otomatis kembali ke binary lama.

## Migrasi database

Beberapa rilis Panel menambah kolom atau tabel. Jika changelog menyebut migrasi, jalankan di folder Panel:

```bash
php artisan migrate
```

Contohnya Panel v0.19.0, yang mengenkripsi `daemon_token` node di database.

## Urutan update

1. Baca [changelog](/changelog) untuk versi yang dituju.
2. Cek [kompatibilitas versi](/guide/compatibility). Fitur baru di Panel sering butuh versi Wings minimum tertentu.
3. Update Panel, jalankan `php artisan migrate` bila perlu.
4. Update Wings di setiap node.
