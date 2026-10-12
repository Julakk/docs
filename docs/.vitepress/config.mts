import { defineConfig } from 'vitepress'

// Base path: repo project page di GitHub Pages memakai /<nama-repo>/.
// Kalau pakai domain sendiri atau Cloudflare Pages, set env VITEPRESS_BASE=/
const base = process.env.VITEPRESS_BASE ?? '/docs/'

// URL publik situs (tanpa slash di akhir), dipakai untuk gambar preview Open Graph.
// Kalau pakai domain sendiri, set env SITE_URL=https://domain-kamu.com
const siteUrl = process.env.SITE_URL ?? 'https://julakk.github.io/docs'
const siteTitle = 'DockPanel'
const siteDescription =
  'Panel manajemen game server self-hosted (DockPanel) dan daemon-nya (DockWings).'

export default defineConfig({
  lang: 'id-ID',
  title: siteTitle,
  description: siteDescription,
  base,
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#05459c' }],
    ['link', { rel: 'icon', type: 'image/png', href: `${base}favicon.png` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: siteTitle }],
    ['meta', { property: 'og:title', content: `${siteTitle} — Panel game server self-hosted` }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { property: 'og:image', content: `${siteUrl}/og.png` }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: `${siteUrl}/og.png` }]
  ],

  themeConfig: {
    logo: '/icon.png',
    nav: [
      { text: 'Panduan', link: '/guide/what-is', activeMatch: '/guide/' },
      { text: 'Referensi', link: '/reference/wings-api', activeMatch: '/reference/' },
      { text: 'Changelog', link: '/changelog' },
      {
        text: 'GitHub',
        items: [
          { text: 'DockPanel', link: 'https://github.com/Julakk/DockPanel' },
          { text: 'DockWings', link: 'https://github.com/Julakk/DockWings' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Mulai',
          items: [
            { text: 'Apa itu DockPanel?', link: '/guide/what-is' },
            { text: 'Persyaratan dan OS', link: '/guide/requirements' },
            { text: 'Instalasi Panel', link: '/guide/install-panel' },
            { text: 'Instalasi Wings (node)', link: '/guide/install-wings' },
            { text: 'Update', link: '/guide/update' }
          ]
        },
        {
          text: 'Penggunaan',
          items: [
            { text: 'Konfigurasi Wings', link: '/guide/configuration' },
            { text: 'Two-Factor Authentication', link: '/guide/two-factor' },
            { text: 'SFTP', link: '/guide/sftp' },
            { text: 'Backup', link: '/guide/backups' },
            { text: 'Kompatibilitas versi', link: '/guide/compatibility' },
            { text: 'Egg yang sudah diuji', link: '/guide/tested-eggs' },
            { text: 'Mengamankan VPS', link: '/guide/hardening' },
            { text: 'Troubleshooting dan FAQ', link: '/guide/troubleshooting' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Referensi',
          items: [{ text: 'API Wings', link: '/reference/wings-api' }]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Julakk/DockPanel' }
    ],

    search: { provider: 'local' },

    editLink: {
      pattern: 'https://github.com/Julakk/docs/edit/main/docs/:path',
      text: 'Edit halaman ini di GitHub'
    },

    outline: { label: 'Di halaman ini' },
    docFooter: { prev: 'Sebelumnya', next: 'Berikutnya' },
    lastUpdated: { text: 'Terakhir diperbarui' },
    returnToTopLabel: 'Kembali ke atas',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Tema',

  }
})
