# Egg yang sudah diuji

DockPanel bisa mengimpor egg berformat Pterodactyl, tetapi tidak semua egg otomatis jalan. Halaman ini hanya berisi hasil tes nyata. Egg yang belum dites ditandai jelas.

**Lingkungan tes:** DockPanel 0.19.0, DockWings 0.5.3, Ubuntu 24.04 (KVM), satu VPS.

## Ringkasan

| Egg | Sumber | Status |
|---|---|---|
| Python generic | parkervcp/eggs | Sebagian diuji. Start dan stop berjalan |
| Node.js generic | parkervcp/eggs | Belum diuji |
| Paper (Minecraft) | parkervcp/eggs | Belum diuji |
| FiveM | parkervcp/eggs | Belum diuji |

::: warning Repo sumber sudah diarsipkan
Egg di atas berasal dari repo `parkervcp/eggs`, yang diarsipkan (read-only) sejak 14 Mei 2024. File JSON-nya masih bisa diimpor dan image Docker yang dirujuk masih bisa diunduh saat tes, tetapi egg tidak lagi diperbarui di sana.
:::

## Python generic

Image yang dipakai: `ghcr.io/parkervcp/yolks:python_3.12`.

| Langkah | Hasil |
|---|---|
| Impor egg | Berhasil |
| Buat server | Berhasil |
| Start | Berhasil di Wings 0.5.3. Output skrip tampil di log container |
| Stop | Berhenti dalam sekitar 0,2 detik. Sinyal `SIGINT` (sesuai `^C` di egg), kode keluar 130 |
| Server yang keluar sendiri | Dianggap crash. Wings menyalakan ulang 3 kali dalam 10 menit, lalu berhenti sampai kamu menekan Start |

Di Wings 0.5.2, egg ini gagal dengan `/bin/sh: [[: not found`. Penyebabnya, start command selalu dijalankan lewat `/bin/sh`, sedangkan egg memakai sintaks bash. Sejak 0.5.3 Wings memakai `/bin/bash` kalau image punya.

**Belum diuji:** `git pull` otomatis (`AUTO_UPDATE`), instalasi paket (`PY_PACKAGES`), instalasi `requirements.txt`, mengirim perintah dari console, dan restart.

## Hal yang perlu diketahui

- **Container lama tidak berubah setelah update Wings.** Perilaku baru hanya berlaku untuk container yang dibuat sesudah update. Server yang sudah ada tetap memakai perintah lama.
- **Deteksi "server siap" tidak jalan di egg generik.** Kolom `done` di egg Python dan Node.js masih berisi teks contoh (`change this part`), jadi status server tidak berpindah ke *Running* berdasarkan output. Ubah `done` di pengaturan egg sesuai teks yang dicetak programmu.
- **Program yang selesai dengan sendirinya dihitung crash.** Skrip yang berjalan sekali lalu keluar (kode 0) akan dinyalakan ulang. Egg ini cocok untuk proses yang berjalan terus, seperti bot.

## Cara mengetes egg sendiri

1. Buat Nest khusus tes, lalu impor egg-nya.
2. Buat allocation dengan port yang belum dipakai server lain. Jangan membuka port tes di firewall.
3. Buat server dengan RAM kecil (512 MB cukup untuk bot).
4. Tunggu instalasi selesai, lalu cek log instalasinya.
5. Start, lalu lihat console.
6. Kirim satu perintah dari console.
7. Stop, lalu Start lagi.
8. Hapus server lewat Panel supaya container dan foldernya ikut hilang.

Tiga perintah di VPS yang membantu membuktikan hasilnya:

```bash
docker logs --tail 20 NAMA_CONTAINER
docker inspect NAMA_CONTAINER --format '{{.Config.Entrypoint}} {{.Config.Cmd}}'
docker events --filter container=NAMA_CONTAINER | grep -E "kill|die|stop"
```

Nama container berbentuk `dockpanel-<uuid server>`. Pesan crash dari Wings ada di `journalctl -u dockwings`.

Sudah mencoba egg lain? [Buka issue](https://github.com/Julakk/docs/issues) dengan nama egg, versi Panel dan Wings, serta hasil tiap langkah di atas.
