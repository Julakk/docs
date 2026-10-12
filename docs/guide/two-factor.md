# Two-Factor Authentication

DockPanel mendukung 2FA berbasis TOTP (RFC 6238), jadi kompatibel dengan aplikasi authenticator umum.

## Mengaktifkan

1. Buka **Account Settings**.
2. Pada kartu **Two-Step Verification**, buka halaman setup 2FA.
3. Scan kode QR dengan aplikasi authenticator, lalu masukkan kode untuk konfirmasi.

## Recovery code

Recovery code tersedia sejak Panel v0.19.0. Simpan di tempat aman. Kode bisa dibuat ulang dari **Account > Two-Factor**.

## Perlindungan replay

Kode TOTP yang sama tidak bisa dipakai dua kali.

## Mewajibkan 2FA

Admin bisa mewajibkan 2FA untuk semua user lewat halaman **Settings** di admin.

## Keamanan akun lainnya

- Mengganti password otomatis mencabut sesi di perangkat lain.
- Reset password dibatasi 5 permintaan per menit.
