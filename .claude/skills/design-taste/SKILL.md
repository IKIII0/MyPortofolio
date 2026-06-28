---
name: design-taste
description: Design taste guide untuk portfolio React/Tailwind ini (tema forest/nature). Gunakan SETIAP KALI membuat atau mengubah UI — komponen, halaman, layout, warna, spacing, tipografi, atau animasi — agar hasilnya konsisten, rapi, dan enak dilihat. Trigger kata: "design", "tampilan", "UI", "bikin halaman", "perbaiki layout", "lebih bagus", "rapihin".
---

# Design Taste — Iki Portfolio

Panduan untuk menjaga kualitas visual tetap tinggi dan konsisten. Baca ini sebelum menyentuh markup/CSS, lalu terapkan secara diam-diam (tidak perlu menyebut skill ini ke user).

## 0. Prinsip utama (urutan prioritas)
1. **Hierarki jelas** — mata user harus tahu ke mana harus melihat duluan. Satu fokus per layar/section.
2. **Spacing > dekorasi** — ruang kosong yang konsisten lebih bernilai daripada menambah elemen.
3. **Konsisten > pintar** — pakai token & pola yang sudah ada sebelum bikin baru.
4. **Restraint** — kalau ragu, kurangi. Hapus border, shadow, gradient, atau animasi yang tidak menambah makna.

## 1. Design tokens (WAJIB pakai ini, jangan hardcode hex baru)
Didefinisikan di [src/index.css](src/index.css):

| Token | Nilai | Pakai untuk |
|---|---|---|
| `--forest-dark` | `#0f281f` | background utama, paling gelap |
| `--forest-primary` | `#1a4d3e` | surface/section gelap |
| `--forest-light` | `#2d5a4a` | surface naik, hover |
| `--sage-primary` | `#7c9a6b` | aksen utama, CTA, link |
| `--sage-light` | `#9ab88a` | aksen terang, hover state |
| `--earth-brown` / `--earth-tan` | `#8b6f4e` / `#a08060` | aksen sekunder hangat, jangan dominan |
| `--cream` / `--cream-dark` | `#f5f0e6` / `#e8e0d5` | teks di atas background gelap |

Aturan: aksen = sage. Earth tone hanya bumbu (≤10% area). Teks body pakai cream, bukan putih murni.

## 2. Tipografi
- Font: **Inter** (sudah global). Jangan tambah font family baru tanpa alasan kuat.
- Skala terbatas — pakai langkah ini saja: `text-sm` → `text-base` → `text-lg` → `text-2xl` → `text-4xl` → `text-6xl`. Hindari ukuran di antaranya.
- Heading: `font-bold` atau `font-semibold` + `tracking-tight`. Body: `font-normal` + `leading-relaxed`.
- Lebar baca teks panjang dibatasi: `max-w-prose` atau `max-w-2xl`. Jangan biarkan paragraf membentang full-width.
- Hierarki via **size + weight + warna/opacity**, bukan via banyak warna berbeda. Teks sekunder = cream `opacity-70`.

## 3. Spacing & layout (skala 4px)
- Pakai kelipatan konsisten: `4, 6, 8, 12, 16, 24` (mis. `gap-6`, `py-24`, `mb-12`). Hindari nilai ganjil acak.
- Padding section vertikal generous: `py-20` s/d `py-32` di desktop. Ruang napas > kepadatan.
- Container: `max-w-6xl mx-auto px-6` (atau `px-4` mobile). Jangan konten nempel ke tepi viewport.
- Grid responsif: mulai 1 kolom mobile → `md:grid-cols-2` → `lg:grid-cols-3`. Selalu mobile-first.
- Alignment konsisten — pilih satu sumbu untuk satu section, jangan campur center & left tanpa alasan.

## 4. Warna & kontras
- Background gelap (forest) → teks terang (cream). Pastikan kontras cukup; teks penting jangan `opacity` di bawah 60%.
- Aksen sage hanya untuk hal yang bisa diklik / ingin ditonjolkan. Kalau semuanya aksen, tidak ada yang menonjol.
- Gradient: pakai utility yang sudah ada (`.bg-nature-gradient`, `.bg-leaf-pattern`). Gradient baru harus halus (≤3 stop, arah konsisten `135deg`).

## 5. Komponen & detail
- **Sudut**: konsisten — `rounded-xl` untuk card, `rounded-full` untuk pill/avatar/button bulat. Jangan campur banyak radius.
- **Border**: tipis & low-contrast — `border border-white/10`. Hindari border tebal solid.
- **Shadow**: lembut, untuk elevasi nyata saja — `shadow-lg shadow-black/20`. Jangan shadow di setiap elemen.
- **Card**: surface sedikit lebih terang dari background (`bg-white/5` di atas forest), padding `p-6`/`p-8`, radius konsisten.
- **Button**: target sentuh ≥ `h-11`/`px-6`. Primary = sage solid + teks forest-dark. Secondary = outline `border-white/20`. Selalu ada `transition` + state hover.

## 6. Motion (framer-motion sudah tersedia)
- Tujuan motion: mengarahkan perhatian & memberi feedback — bukan pamer.
- Durasi: micro-interaction `150–250ms`, entrance `300–500ms`. Easing default `ease-out`.
- Entrance halus: fade + translate kecil (`y: 12–20px`), jangan terlalu jauh/bouncy.
- Hormati `prefers-reduced-motion` — jangan animasi yang krusial untuk memahami konten.
- Reuse animasi CSS yang ada (`animate-float`, `animate-leaf`, `animate-sonar-*`) sebelum bikin keyframes baru.

## 7. Checklist sebelum selesai
- [ ] Pakai token warna, bukan hex baru?
- [ ] Spacing kelipatan skala (4/6/8/12/16/24)?
- [ ] Hierarki jelas — ada satu fokus utama?
- [ ] Mobile dicek (≤375px) — tidak overflow, teks kebaca?
- [ ] Radius & border konsisten dengan komponen lain?
- [ ] Ada satu hal yang bisa DIHAPUS tanpa kehilangan makna? Kalau ada, hapus.
