# Kompatibilitas versi

Beberapa fitur di Panel memanggil endpoint yang baru ada di versi Wings tertentu. Tabel ini dirangkum dari changelog kedua project.

| Fitur | Panel minimal | Wings minimal |
| ----- | ------------- | ------------- |
| Backup, dan perubahan allocation sampai ke container | 0.15.3 | 0.4.1 |
| Restore backup | 0.16.0 | 0.4.2 |
| Extract arsip (`.zip`, `.tar`, `.tar.gz`, `.tgz`) | 0.17.2 | 0.4.6 |
| Zip, ubah izin, unduh dari URL | 0.17.4 | 0.4.8 |
| SFTP bawaan | 0.18.1 | 0.5.0 |

::: tip
Aturan praktis: update Wings dulu atau bersamaan dengan Panel, supaya tombol baru di Panel tidak memanggil endpoint yang belum ada di node.
:::

## Versi saat ini

Berdasarkan changelog per 12 Oktober 2026:

- **DockPanel** 0.19.0
- **DockWings** 0.5.2

Lihat [changelog](/changelog) untuk detail tiap rilis.
