# docs

Website dan dokumentasi resmi untuk [DockPanel](https://github.com/Julakk/DockPanel) dan [DockWings](https://github.com/Julakk/DockWings).

Dibangun dengan [VitePress](https://vitepress.dev). Repo ini sengaja dipisah dari repo Panel dan Wings supaya website tidak ikut ter-deploy ke server dan punya siklus rilis sendiri.

## Menjalankan di lokal

Butuh Node.js 18 atau lebih baru.

```bash
npm install
npm run dev       # server development
npm run build     # build ke docs/.vitepress/dist
npm run preview   # lihat hasil build
```

## Struktur

```
docs/
├── .vitepress/config.mts   # navigasi, sidebar, tema
├── index.md                # landing page
├── guide/                  # panduan instalasi dan penggunaan
├── reference/              # referensi API Wings
└── changelog.md            # ringkasan rilis
```

## Deploy

Workflow `.github/workflows/deploy.yml` mem-build dan men-deploy ke GitHub Pages setiap push ke `main`. Aktifkan dulu di repo: **Settings → Pages → Source: GitHub Actions**.

Base path default adalah `/docs/` (sesuai nama repo). Kalau pakai domain sendiri atau Cloudflare Pages, build dengan `VITEPRESS_BASE=/`:

```bash
VITEPRESS_BASE=/ npm run build
```

Di Cloudflare Pages: build command `npm run build`, output directory `docs/.vitepress/dist`, dan environment variable `VITEPRESS_BASE=/`.

## Berkontribusi

Edit file Markdown di folder `docs/`. Tiap halaman punya tautan "Edit halaman ini di GitHub".

## Lisensi

Kode website ini dirilis di bawah MIT (lihat `LICENSE`). Panel dan Wings sendiri berlisensi AGPL-3.0.
