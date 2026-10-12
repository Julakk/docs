import { defineConfig } from 'vitepress'

// Base path: repo project page di GitHub Pages memakai /<nama-repo>/.
// Kalau pakai domain sendiri atau Cloudflare Pages, set env VITEPRESS_BASE=/
const base = process.env.VITEPRESS_BASE ?? '/docs/'

export default defineConfig({
  lang: 'id-ID',
  title: 'DockPanel',
  description: 'Panel manajemen game server self-hosted (DockPanel) dan daemon-nya (DockWings).',
  base,
  cleanUrls: true,
  lastUpdated: true,
  head: [['meta', { name: 'theme-color', content: '#3451b2' }]],

  themeConfig: {
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
            { text: 'Kompatibilitas versi', link: '/guide/compatibility' }
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

    footer: {
      message: 'Panel dan Wings dirilis di bawah AGPL-3.0.',
      copyright: 'Julak Junior'
    }
  }
})
