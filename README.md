# haykal24.github.io

Kumpulan landing page modern, dibangun dengan disiplin design system
**tasteskill** (anti-slop). Semua halaman statis (HTML + Tailwind via CDN),
langsung jalan di GitHub Pages tanpa build step.

## Halaman

| Halaman | URL | Gaya |
|---------|-----|------|
| **KARYA** — studio produk digital & brand | `https://haykal24.github.io/` | Dark, bold-cinematic / agency (accent merah `#FF3D2E`, font Archivo + Space Grotesk) |
| **Nusatix** — sistem ticketing event | `https://haykal24.github.io/nusatix/` | Clean-SaaS (dark, accent lime `#C6F24E`, font Space Grotesk + Plus Jakarta Sans) |

## Stack
- **HTML statis** + **Tailwind CSS** (Play CDN).
- **Phosphor Icons** (icon family tunggal).
- Interaksi: vanilla JS (sticky nav, scroll-reveal, carousel) + native `<details>` untuk accordion/FAQ.

## Yang perlu diganti sebelum produksi (umum)
- [ ] **Foto asli** — saat ini placeholder `picsum.photos`.
- [ ] **Logo / brand asli** — saat ini monogram fiktif.
- [ ] **Self-host font** (ganti Google Fonts `<link>`) untuk performa & privasi.
- [ ] **Self-host / build Tailwind** (Play CDN tidak disarankan untuk produksi) — compile via Tailwind CLI.
- [ ] Sambungkan semua tombol CTA & link ke URL sebenarnya.
- [ ] Angka statistik masih ilustrasi — ganti dengan data nyata.
