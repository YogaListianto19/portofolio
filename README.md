# Portofolio Yoga Listianto

Situs pribadi seorang Full Stack & AI Engineer yang merancang dan membangun produk digital dari ide sampai production. Karyanya meliputi AI agent, aplikasi SaaS, otomasi WhatsApp, dan integrasi ERP (Odoo).

**Live:** https://yogalistianto19.github.io/portofolio/

## Isi situs

- **Layanan**: empat hal yang bisa saya bangun untuk klien.
- **Karya**: tiga studi kasus unggulan, ditambah indeks 12 proyek yang bisa difilter. Setiap proyek punya panel detail berisi masalah, peran, apa yang dibangun, AI yang dipakai, keputusan produk, dan hasilnya.
- **Tentang**, **Keahlian**, **Pengalaman**, **Cara kerja**, dan **Kontak**.

Sistem milik klien dan perusahaan ditulis tanpa nama maupun data asli. Contoh order di hero memakai produk samaran, dan gambar proyek berupa ilustrasi SVG, bukan screenshot.

## Desain

Gaya "spatial terang" yang futuristik tapi tetap bersih, di atas grid 12 kolom:

- Ungu klasik Odoo (#875A7B) di atas latar putih lavender. Teal, pink, hijau, dan kuning khas Odoo dipakai sebagai aksen kecil.
- Cahaya aurora lembut di hero, panel melayang, nota berlapis kaca, dan teks gradasi ungu → teal pada frasa utama.
- Font: Sora untuk judul, Public Sans untuk teks, JetBrains Mono untuk nota.
- Tema terang dan gelap mengikuti pengaturan sistem, dan bisa diganti manual.
- Menghormati `prefers-reduced-motion`.
- Panel detail proyek bisa dioperasikan dengan keyboard: Esc untuk menutup, dan fokus dikembalikan ke elemen sebelumnya.

## Stack

React 19 · Vite 7 · Tailwind CSS 3 · Framer Motion · Lucide. Di-deploy ke GitHub Pages.

## Mengubah konten

Semua teks ada di [`src/data/portfolio.js`](src/data/portfolio.js): profil, statistik, layanan, proyek, keahlian, pengalaman, cara kerja, dan kontak.

Untuk menambah proyek, tambahkan satu objek ke `projects`:

- Isi `featured: true` agar proyek tampil sebagai studi kasus besar.
- Isi `visual` dengan salah satu nilai berikut: `chat`, `dashboard`, `flow`, `invite`, `ledger`, `mobile`.

## Menjalankan & deploy

```bash
npm install
npm run dev      # http://localhost:5173/portofolio/
npm run lint
npm run deploy   # build lalu publish dist/ ke branch gh-pages
```
