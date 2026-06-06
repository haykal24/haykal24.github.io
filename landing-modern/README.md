# Nusatix — Landing Page

Landing page modern untuk **Nusatix**, sebuah sistem ticketing event. Dibangun
dengan disiplin design system **tasteskill** (anti-slop).

## Live
Setelah di-deploy via GitHub Pages: `https://haykal24.github.io/landing-modern/`

## Stack
- **HTML statis** + **Tailwind CSS** (Play CDN) — langsung jalan di GitHub Pages, tanpa build step.
- **Phosphor Icons** (icon family tunggal).
- Font: **Space Grotesk** (display) + **Plus Jakarta Sans** (body).
- Interaksi: vanilla JS (sticky nav, scroll-reveal) + native `<details>` untuk FAQ.

## Design read
> Landing SaaS event-ticketing untuk penyelenggara event di Indonesia, vibe
> modern-energetic-clean, dark mode, satu accent **lime `#C6F24E`**.

Dials: `VARIANCE 7 / MOTION 6 / DENSITY 4`.

## Yang perlu diganti sebelum produksi
- [ ] **Foto hero & event asli** — saat ini pakai placeholder `picsum.photos`. Ganti dengan foto konser/event sungguhan (≈1000×1200).
- [ ] **Logo penyelenggara asli** — saat ini monogram brand fiktif (Pulse Fest, RuangSeni, dll).
- [ ] **Self-host font** (ganti Google Fonts `<link>`) untuk performa & privasi.
- [ ] **Self-host / build Tailwind** (Play CDN tidak disarankan untuk produksi) — compile ke CSS statis via Tailwind CLI.
- [ ] Sambungkan semua tombol CTA & link ke URL aplikasi yang sebenarnya.
- [ ] Angka penjualan/statistik masih ilustrasi — ganti dengan data nyata.
