<script setup>
import { onMounted } from 'vue'
import { withBase } from 'vitepress'

// Link lama /changelog#dockwings dan #dockpanel diarahkan ke halaman baru
onMounted(() => {
  const h = location.hash
  if (h === '#dockwings') location.replace(withBase('/changelog/dockwings'))
  else if (h === '#dockpanel') location.replace(withBase('/changelog/dockpanel'))
})
</script>

# Changelog

Ringkasan rilis terbaru. Changelog lengkap ada di repo masing-masing:
[DockPanel](https://github.com/Julakk/DockPanel/blob/main/CHANGELOG.md) dan [DockWings](https://github.com/Julakk/DockWings/blob/main/CHANGELOG.md).



- [Changelog DockPanel](/changelog/dockpanel): panel web (Laravel)
- [Changelog DockWings](/changelog/dockwings): daemon node (Go)
