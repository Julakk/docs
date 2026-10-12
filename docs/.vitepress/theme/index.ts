import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

const link = (href: string, text: string) =>
  h('a', { href, target: '_blank', rel: 'noreferrer' }, text)

const SiteCopyright = () =>
  h('footer', { class: 'site-copyright' }, [
    h('p', { class: 'site-copyright-main' }, [
      '© 2026 Julak Junior. ',
      link('https://github.com/Julakk/DockPanel/blob/main/LICENSE', 'DockPanel'),
      ' dan ',
      link('https://github.com/Julakk/DockWings/blob/main/LICENSE', 'DockWings'),
      ' dirilis di bawah AGPL-3.0. Kode dan dokumentasi website ini dirilis di bawah lisensi MIT.'
    ]),
    h(
      'p',
      { class: 'site-copyright-note' },
      'DockPanel adalah proyek independen yang terinspirasi Pterodactyl, dan tidak berafiliasi dengan atau didukung oleh Pterodactyl. Pterodactyl, Docker, Laravel, Go, MySQL, MariaDB, phpMyAdmin, Nginx, dan Ubuntu adalah merek dagang atau milik pemiliknya masing-masing.'
    )
  ])

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, { 'layout-bottom': SiteCopyright })
}
