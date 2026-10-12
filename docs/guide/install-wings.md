# Instalasi Wings (node)

Wings dipasang di node yang menjalankan game server. Node membutuhkan Docker.

## Lewat installer

Jalankan di VPS Ubuntu (Ubuntu 24 yang dipakai installer):

```bash
bash <(curl -s https://raw.githubusercontent.com/Julakk/DockPanel/main/install.sh)
```

Pilih **2** untuk memasang node. Installer:

- memasang Docker dan Go (versi Go mengikuti `go.mod` DockWings, mendukung arm64),
- menanyakan **URL Panel** dan menuliskannya ke `config.json` (jika dikosongkan, SFTP dinonaktifkan),
- membuka port API dan SFTP di `ufw` jika `ufw` aktif,
- tidak menimpa `config.json` yang sudah ada tanpa konfirmasi.

Setelah itu isi `auth_token` di `config.json` dengan `daemon_token` dari halaman node di Panel. Lihat [Konfigurasi Wings](/guide/configuration).

## Build manual

Butuh Go 1.22 atau lebih baru.

```bash
git clone https://github.com/Julakk/DockWings.git
cd DockWings
cp config.example.json config.json
go build -o bin/wings ./cmd/wings
./bin/wings -config config.json
```

Untuk menjalankan test:

```bash
go test ./...
```

::: warning
Wings mengontrol container lewat Docker CLI, jadi Docker harus terpasang dan bisa dipakai oleh user yang menjalankan Wings. Docker tidak berjalan di Termux/Android, jadi Wings di sana hanya bisa dibuild dan dites, bukan dipakai untuk menjalankan server.
:::
