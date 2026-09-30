// ---------------------------------------------------------------------------
// Satu-satunya sumber konten portofolio.
// Sistem milik klien/perusahaan sengaja ditulis generik — tanpa nama pelanggan,
// nominal, atau kredensial. Nama produk asli disamarkan (contoh order memakai
// perumpamaan hewan qurban). Angka hanya berupa agregat.
// ---------------------------------------------------------------------------

export const profile = {
    name: "Yoga Listianto",
    brand: "Software Engineer — Odoo ERP & Integrasi",
    shortRole: "Software Engineer — Odoo ERP & Integrasi",
    roles: ["Software Engineer", "Odoo ERP", "Integrasi"],
    city: "Bandung",
    location: "Bandung, Indonesia",
    headline: {
        before: "Pencatatan rapi dan terkontrol,",
        highlight: "dari order sampai laporan keuangan",
        after: ".",
    },
    subheadline:
        "Bagi saya, Odoo itu alat kontrol, bukan sekadar alat catat: setiap transaksi saling terhubung, datanya bisa dipercaya, dan laporannya tinggal pencet. 5+ tahun saya mengimplementasikan dan mengkustom Odoo 10–19, termasuk integrasinya ke WhatsApp dan bank.",
    ctaPrimary: "Lihat studi kasus",
    ctaSecondary: "Mulai proyek",
    avatar: "https://github.com/YogaListianto19.png",
};

export const navLinks = [
    { name: "Odoo", href: "#odoo" },
    { name: "Layanan", href: "#layanan" },
    { name: "Karya", href: "#karya" },
    { name: "Tentang", href: "#tentang" },
    { name: "Keahlian", href: "#keahlian" },
    { name: "Pengalaman", href: "#pengalaman" },
    { name: "Cara kerja", href: "#cara-kerja" },
];

export const heroMeta = [
    "Portofolio — Edisi September 2026",
    "Bandung, Indonesia (WIB)",
    "Odoo · Integrasi · Otomasi",
    "Menerima proyek freelance",
];

export const stats = [
    { value: "5+", label: "Tahun mengerjakan Odoo & sistem bisnis" },
    { value: "10+", label: "Perusahaan memakai sistem buatan saya" },
    { value: "1.675+", label: "Sales order dibuat oleh AI agent saya" },
    { value: "v10–19", label: "Rentang versi Odoo yang saya tangani" },
];

// Contoh order di hero. Produk disamarkan (hewan qurban) demi kerahasiaan perusahaan.
export const heroReceipt = {
    title: "Nota Order Otomatis",
    subtitle: "order-agent · #01675 · 10.42 WIB",
    log: [
        { tag: "in", text: "“pak udin kmbg A sup 5 ekr, tmpo 30”" },
        { tag: "ai", text: "dibaca 1 baris · pelanggan cocok · keyakinan 0,93" },
        { tag: "erp", text: "stok 42 ekor di Kandang Bandung · limit kredit aman" },
        { tag: "wa", text: "pratinjau terkirim → menunggu sales: Y / N" },
        { tag: "done", text: "Y → sales order dibuat · alias “A sup” dipelajari" },
    ],
    parsed: [
        { k: "Pelanggan", v: "Pak Udin" },
        { k: "Barang", v: "Kambing Tipe A Super" },
        { k: "Jumlah", v: "5 ekor" },
        { k: "Tempo", v: "30 hari" },
    ],
    status: "Tersimpan",
    caption: "Ilustrasi satu order di AI agent WhatsApp → LLM → ERP yang saya bangun. Nama produk dan data disamarkan.",
};

// Odoo explained in a business owner's language: a control tool, not just a place to record things.
export const odooFlows = [
    { label: "Penjualan", tone: "teal", steps: ["Order masuk", "Produksi / siapkan barang", "Kirim", "Tagih", "Terima bayar"] },
    { label: "Pembelian", tone: "pink", steps: ["Permintaan barang", "Pesan ke supplier", "Terima barang", "Bayar supplier"] },
    { label: "Keuangan", tone: "purple", steps: ["Jurnal tercatat otomatis", "Hutang & piutang", "Laba rugi & neraca"] },
];

export const odooPoints = [
    {
        title: "Tidak ada yang diketik ulang",
        description:
            "Tagihan dibuat dari order dan pengiriman yang sudah tercatat. Setiap dokumen punya nomor dan bisa ditelusuri: tagihan ini dari order yang mana, sudah dikirim berapa kali, dibayar berapa kali.",
    },
    {
        title: "Sistem yang mengingatkan",
        description:
            "Tagihan mana yang belum lunas, mana yang mau jatuh tempo, mana yang sudah lama tertunggak — sistem yang memberi tahu, bukan Anda yang mencari.",
    },
    {
        title: "Titik kontrol di tiap tahap",
        description:
            "Barang belum boleh dikirim sebelum lunas? Revisi order harus tercatat sebelum produksi jalan? Aturan seperti ini dipasang langsung di alurnya, bukan diingat-ingat.",
    },
    {
        title: "Data yang bisa dipercaya",
        description:
            "Transaksi yang sudah dibayar dikunci. Kalau salah, dibetulkan lewat koreksi — seperti bank, bukan dihapus. Setiap perubahan tercatat siapa dan kapan.",
    },
    {
        title: "Tiap orang sesuai tanggung jawabnya",
        description:
            "Bagian produksi tidak perlu melihat nilai uang; bagian tagihan tidak perlu mengubah stok. Hak akses mengikuti peran masing-masing.",
    },
    {
        title: "Biaya, untung, dan laporan tinggal pencet",
        description:
            "Bahan yang dipakai tercatat, jadi biaya dan untung per produk kelihatan. Rekap harian sampai tahunan, pelanggan terbesar, produk terlaris — tanpa merekap manual.",
    },
];

export const odooClosing =
    "Aplikasi itu cuma alat. Yang membuatnya berguna adalah alur yang pas dan kebiasaan input yang disiplin — itu yang saya bantu bangun.";

export const sections = {
    odoo: {
        index: "01",
        label: "Kenapa Odoo",
        title: "Odoo itu alat kontrol,",
        emphasis: "bukan sekadar alat catat.",
        lead: "Mencatat bisa di Excel. Nilai Odoo ada di kontrolnya: sistem yang mengingatkan, mengunci, dan menunjukkan apa yang terlewat — dari order sampai laporan keuangan.",
    },
    services: {
        index: "02",
        label: "Layanan",
        title: "Odoo yang dikerjakan dari",
        emphasis: "proses bisnisnya.",
        lead: "Saya pegang seluruh prosesnya: memetakan alur kerja yang sebenarnya, menulis PRD, membangun modul dan integrasinya, memasang AI di tempat yang memang menguntungkan, lalu merilisnya ke production.",
    },
    work: {
        index: "03",
        label: "Karya",
        title: "Studi kasus",
        emphasis: "pilihan.",
        lead: "Modul dan integrasi Odoo yang menggerakkan order dan uang sungguhan — plus AI agent dan aplikasi web yang saya bangun di atasnya.",
    },
    about: {
        index: "04",
        label: "Tentang",
        title: "Engineer yang paham",
        emphasis: "proses bisnisnya dulu.",
    },
    skills: {
        index: "05",
        label: "Keahlian",
        title: "Perkakas untuk",
        emphasis: "merilis produk.",
        lead: "Dikelompokkan berdasarkan hasil yang bisa dicapai — bukan persentase.",
    },
    experience: {
        index: "06",
        label: "Pengalaman",
        title: "Pengalaman.",
    },
    process: {
        index: "07",
        label: "Cara kerja",
        title: "Mulai dari yang sederhana,",
        emphasis: "naik sambil berjalan.",
        lead: "Sistem tidak perlu langsung lengkap. Alur inti dijalankan dulu sampai tim terbiasa, lalu ditambah sesuai kebutuhan — dengan satu syarat: datanya tetap bisa dipertanggungjawabkan.",
    },
    contact: {
        index: "08",
        label: "Kontak",
    },
};

export const aboutData = {
    paragraphs: [
        "Saya Yoga, developer yang tinggal di Bandung. Saya memulai karier dari sisi operasional — enam tahun menjalankan Oracle ERP di sebuah pabrik manufaktur — jadi saya paham cara bisnis bekerja sebelum belajar menuliskannya menjadi kode.",
        "Sejak 2021 saya membangun modul ERP, integrasi bank dan WhatsApp, lalu AI agent dan produk SaaS. Di peran saya sekarang, saya bekerja sebagai business analyst sekaligus engineer: memimpin diskusi dengan stakeholder, menulis PRD, merancang alur dan prototipe yang bisa diklik, lalu membangun, menguji, dan merilisnya.",
        "AI ada di dalam produk yang saya bangun dan di cara saya membangunnya. Di dalam produk: LLM agent, prompt berbasis retrieval, speech-to-text, OCR. Di alur kerja: Claude Code dengan agent skill yang saya tulis untuk tim, plus QA otomatis lewat browser — karena itu saya bisa rilis dalam hitungan minggu, bukan kuartal.",
    ],
    quote: {
        text: "“Varian yang salah lebih berbahaya daripada ‘tidak ditemukan’.”",
        cite: "Prinsip yang saya pegang saat merancang AI order agent",
    },
    facts: [
        { label: "Domisili", value: "Bandung (WIB)" },
        { label: "Pengalaman", value: "5+ tahun" },
        { label: "Fokus", value: "Full stack · AI · Produk" },
        { label: "Bahasa", value: "Indonesia, Inggris" },
        { label: "Cara kerja", value: "Remote, asinkron" },
    ],
    highlights: [
        "Odoo 10–19: modul kustom, migrasi versi & data",
        "Integrasi WhatsApp Cloud API & pembayaran bank (SNAP)",
        "LLM agent dengan guardrail dan konfirmasi manusia",
        "Menulis PRD, decision record & rencana UAT — bukan cuma kode",
        "Aplikasi web pendamping: Next.js / React, Python, PostgreSQL",
        "Rilis cepat dengan alur kerja berbantuan AI",
    ],
};

export const services = [
    {
        title: "Modul kustom & migrasi Odoo",
        description:
            "Modul kustom, penyesuaian alur kerja, laporan, dan migrasi versi di Odoo 10–19 (Community & Enterprise) — dikerjakan dari pemahaman proses bisnisnya, bukan cuma dari daftar permintaan fitur.",
        deliverables: ["Discovery & PRD", "Modul kustom", "Migrasi versi & data", "Laporan QWeb & SQL", "UAT & panduan pengguna"],
    },
    {
        title: "Integrasi ERP",
        description:
            "Menyambungkan Odoo ke sistem lain yang dipakai bisnis Anda: WhatsApp Cloud API, API bank (SNAP / virtual account), aplikasi web, dan otomasi antar-sistem lewat REST API maupun n8n.",
        deliverables: ["WhatsApp Cloud API", "Bank SNAP / VA", "REST & webhook", "JSON-RPC / XML-RPC", "Sinkronisasi data"],
    },
    {
        title: "Otomasi & AI agent (opsional)",
        description:
            "Bukan bagian dari Odoo, melainkan sistem terpisah yang tersambung lewat API: bot WhatsApp yang membaca order, workflow n8n, atau OCR dokumen — selalu dengan konfirmasi manusia sebelum datanya masuk ke ERP. Dipasang hanya kalau alur kerjanya memang menuntut.",
        deliverables: ["Bot WhatsApp / Telegram", "Workflow n8n", "RAG & few-shot prompting", "OCR dokumen", "Guardrail & logging"],
    },
    {
        title: "Aplikasi web pendamping",
        description:
            "Portal untuk pelanggan, warga, atau tim lapangan yang tersambung ke ERP — sampai produk SaaS yang berdiri sendiri, kalau memang itu yang dibutuhkan.",
        deliverables: ["Next.js / React", "PostgreSQL / Supabase", "Portal pelanggan", "Aplikasi Flutter", "Vercel / Docker"],
    },
];

export const projectFilters = ["Semua", "AI & Otomasi", "Aplikasi & SaaS", "ERP & Integrasi"];

export const projects = [
    {
        id: "wa-order-agent",
        featured: true,
        title: "AI Sales Order Agent di WhatsApp",
        category: "AI & Otomasi",
        year: "2026",
        status: "Production",
        visual: "chat",
        metric: { value: "1.675+", label: "sales order dibuat oleh agent" },
        tagline: "Sales mengetik order dengan singkatan di WhatsApp; LLM mengubahnya menjadi sales order yang terkonfirmasi di ERP.",
        summary:
            "LLM agent yang membaca order bebas dari ~25 sales lapangan, mengecek stok, harga, dan kredit di ERP, lalu membuat sales order setelah sales mengonfirmasi. Agent ini juga mempelajari alias produk baru dari order yang sudah dikonfirmasi.",
        role: "Product owner, AI & integration engineer",
        problem:
            "Sales lapangan mengirim order lewat chat bebas. Tim CS mengetik ulang semuanya ke ERP — lambat, rawan salah, dan tidak tahu kondisi stok maupun limit kredit.",
        built: [
            "Workflow n8n 43 node di atas WhatsApp Cloud API resmi",
            "Pengecekan langsung ke ERP via JSON-RPC: stok, harga, pelanggan, piutang",
            "Routing gudang berdasarkan provinsi pelanggan, dengan cadangan lintas gudang (16 gudang)",
            "Sintaks harga khusus, termin pembayaran, dan sales dikenali dari nomor pengirim",
            "Komisi dihitung otomatis saat order dibuat; notifikasi Telegram saat ada gangguan",
        ],
        ai: [
            "LLM (Gemini 2.5 Flash via OpenRouter) membaca singkatan menjadi baris terstruktur: pelanggan, SKU, jumlah, harga, termin",
            "Prompt berbasis retrieval: kandidat produk dari ERP + order lama yang sudah dikonfirmasi sebagai contoh few-shot + tabel alias frasa→SKU",
            "Loop belajar mandiri yang hanya belajar dari order yang dikonfirmasi sales, dengan ambang lebih ketat untuk alias yang ambigu",
            "Setiap hasil baca dicatat dengan skor keyakinan; kalau ragu, bot bertanya, bukan menebak",
        ],
        design: [
            "Prinsip yang saya tetapkan: “varian yang salah lebih berbahaya daripada tidak ditemukan” — selalu ada pratinjau + konfirmasi Y/N sebelum data ditulis",
            "Menulis panduan format order untuk sales dan penjelasan “cara AI kami belajar” untuk manajemen",
            "Berpindah melalui 4 gateway WhatsApp demi keandalan: Evolution API → gateway Node sendiri → Baileys → Meta Cloud API",
        ],
        impact: [
            "1.675+ sales order dibuat oleh agent",
            "Dipakai setiap hari oleh ~25 sales",
            "Kosakata tumbuh 298 → 445 istilah; istilah yang aktif dipakai AI 60 → 200",
            "Cakupan gudang bertambah dari 11 menjadi 16",
        ],
        stack: ["n8n", "LLM (Gemini)", "OpenRouter", "WhatsApp Cloud API", "Odoo JSON-RPC", "PostgreSQL", "Telegram Bot"],
        note: "Sistem internal untuk distributor multi-cabang — detail disamarkan.",
    },
    {
        id: "wedding-saas",
        title: "SaaS Undangan Pernikahan Digital",
        category: "Aplikasi & SaaS",
        year: "2026",
        status: "Live",
        visual: "invite",
        metric: { value: "3 minggu", label: "dari ide sampai live, dalam 5 sprint" },
        tagline: "Produk undangan siap jadi: satu Google Form masuk, link WhatsApp personal untuk setiap tamu keluar.",
        summary:
            "SaaS Next.js dengan empat permukaan — undangan tamu, panel admin, portal pelanggan, dan scanner QR check-in — plus mesin tema yang menghasilkan 24 desain kurasi.",
        role: "Founder-engineer — produk, harga, UX & full-stack",
        problem:
            "Pasangan ingin undangan yang cantik tanpa harus belajar tool builder, dan studio butuh produk pembuka yang terjangkau untuk mengarah ke paket foto & video — tanpa tenggelam dalam pekerjaan manual.",
        built: [
            "Empat permukaan dalam satu aplikasi: halaman undangan per tamu, panel admin, portal pelanggan berbasis token (tanpa akun), dan check-in QR ber-PIN untuk hari-H",
            "Mesin “resep” tema: 5 layout × 12 palet × 6 pasangan font × 4 cover × 4 gaya animasi → 24 tema kurasi, kontras dicek otomatis lewat script",
            "RSVP + buku tamu dengan moderasi, amplop digital (transfer / QRIS), preset agama",
            "Impor CSV dari Google Form dengan pemetaan field → draf undangan; link tamu personal massal lengkap dengan teks WhatsApp",
            "State machine DRAFT → REVIEW → PUBLISHED yang dikunci pembayaran; mesin harga durasi × add-on × bundling",
            "Analitik kunjungan, masa aktif via cron, dan halaman kedaluwarsa yang berubah jadi penawaran perpanjangan",
        ],
        design: [
            "PRD dengan 4 persona (admin, pasangan, tamu, panitia) dan 3 alur utama",
            "Mobile-first: hampir semua undangan dibuka di browser bawaan WhatsApp",
            "Dua bahasa desain yang sengaja dibedakan — UI admin yang padat dan UI undangan yang emosional",
            "Merancang harga: 3 tingkat durasi plus add-on dan bundling",
            "QA otomatis: 12 script cek, termasuk tes 4 zona waktu dan tes layout di Chrome asli pada 5 lebar layar",
        ],
        impact: ["Live di Vercel dengan form order yang berjalan", "5 sprint, 29 commit, 23 model data dalam ~3 minggu"],
        stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind v4", "shadcn/ui", "Prisma", "Neon Postgres", "Vercel"],
        links: [
            { label: "Situs live", href: "https://undangan-ns.vercel.app" },
            { label: "Contoh undangan", href: "https://undangan-ns.vercel.app/alex-love-aruna" },
        ],
    },
    {
        id: "crm-super-app",
        featured: true,
        title: "CRM “Super App” untuk Tim Sales Lapangan",
        category: "ERP & Integrasi",
        year: "2026",
        status: "Pilot",
        visual: "mobile",
        metric: { value: "16", label: "peran pengguna dalam satu CRM" },
        tagline: "Satu CRM untuk marketing, sales, engineering & procurement — pipeline lead-to-deal, check-in kunjungan GPS, dan pelacakan mesin terpasang.",
        summary:
            "Saya memimpin discovery, menulis PRD dan decision record, membuat prototipe 14 layar mobile plus dashboard manajemen, lalu membangun CRM native di ERP lengkap dengan aplikasi sales lapangan berbasis Flutter.",
        role: "Business analyst, product designer & lead developer",
        problem:
            "Lead, kunjungan, penawaran, dan mesin terpasang tercatat di spreadsheet dan chat yang terpisah. Manajemen tidak punya satu tampilan funnel, dan 16 peran butuh hak akses berbeda.",
        built: [
            "Modul Odoo 15: 28 model, ~10 ribu baris Python, ~7 ribu baris XML, dashboard OWL",
            "Pipeline Lead → Contact → Deal dengan gerbang kualifikasi Need / Budget / Intent, aturan lead kembali, dan atribusi first-touch",
            "15 grup hak akses dengan record rule dan audit log yang tidak bisa diubah",
            "Check-in kunjungan GPS yang divalidasi terhadap koordinat pelanggan terverifikasi",
            "Wizard deal → sales order, meja keluhan mesin terpasang, laporan lead & deal satu layar dengan funnel MQL vs SQL",
            "Kerangka aplikasi Flutter untuk sales lapangan: offline-first SQLite, check-in GPS & selfie, login biometrik",
        ],
        ai: ["Dirancang untuk fase berikutnya: ringkasan chat dengan AI, saran tahap berikutnya, dan OCR kartu nama"],
        design: [
            "PRD, 19 keputusan terkunci beserta alasannya, dan rencana modul 1.200 baris",
            "Prototipe HTML yang bisa diklik: 14 layar HP + “ruang manajemen” desktop, diiterasi dari masukan manajemen",
            "Gap analysis atas brief “CRM ideal” 15 bagian dari stakeholder — ~70% ternyata sudah tercakup, sehingga rebuild mahal bisa dihindari",
            "Pivot dari stack NestJS/Next.js terpisah ke native ERP untuk memangkas biaya integrasi",
        ],
        impact: [
            "Rollout ke ~50 pengguna lewat pilot 5 orang",
            "UAT: 26/26 cek lolos via RPC dan 5/5 di UI sebelum rilis",
            "Dites pada salinan production berisi ~12 ribu partner dan ~41 ribu sales order",
        ],
        stack: ["Odoo 15", "Python", "OWL", "PostgreSQL", "Flutter", "Riverpod", "SQLite", "JSON-RPC"],
        note: "Sistem internal — screenshot tidak ditampilkan; gambar hanya ilustrasi.",
    },
    {
        id: "threads-ai-agent",
        title: "AI Agent untuk Komentar Threads",
        category: "AI & Otomasi",
        year: "2026",
        status: "Dalam pengembangan",
        visual: "flow",
        tagline: "Pemilahan komentar dan balasan sesuai karakter brand untuk akun Threads sebuah studio — dengan delapan guardrail dan manusia tetap memegang kendali.",
        summary:
            "Lima workflow n8n yang menarik komentar, mengklasifikasikannya dengan model cepat, menyusun balasan berbasis knowledge base dengan model utama, lalu mendorong calon pembeli ke papan lead di Telegram.",
        role: "Product owner & AI/automation engineer",
        problem: "100+ komentar per hari. Pemilik menghabiskan ~2 jam sehari membalas manual, dan calon pembeli tenggelam di antara spam.",
        built: [
            "5 workflow: refresh token, ambil komentar, triase & balasan AI, papan lead, laporan harian",
            "Lapisan data Supabase (5 tabel) dengan RLS yang hanya bisa diakses service role",
            "Ruang kendali Telegram dengan tombol inline untuk memindahkan lead BARU → DIHUBUNGI → NEGOSIASI → DP, idempoten",
        ],
        ai: [
            "Pipeline dua model: model cepat mengklasifikasikan komentar dengan output JSON-schema; model utama menyusun balasan berbasis knowledge base dengan persona brand",
            "8 lapis pengaman: system prompt, kill switch, rate limit, anti-loop, validasi schema, keyakinan ≥ 0,80, blocklist regex untuk harga & janji, dan persetujuan via Telegram sebagai cadangan",
            "Spam disembunyikan otomatis, komplain dieskalasi, lead panas masuk papan lead",
        ],
        design: [
            "PRD dengan non-goal yang tegas — tidak ada otomasi DM, karena API tidak mendukung dan scraping melanggar aturan",
            "Lapisan LLM yang tidak terikat vendor, jadi model bisa diganti berdasarkan biaya atau kualitas",
        ],
        impact: ["Target: balasan pertama < 15 menit; waktu pemilik dari ~2 jam menjadi < 15 menit per hari"],
        stack: ["n8n", "LLM (bebas vendor)", "Threads Graph API", "Supabase", "Telegram Bot", "Docker", "Cloudflare Tunnel"],
    },
    {
        id: "wa-cloud-erp",
        featured: true,
        title: "Inbox WhatsApp Cloud & Penagihan di ERP",
        category: "ERP & Integrasi",
        year: "2022 – 2026",
        status: "Production",
        visual: "chat",
        metric: { value: "Sejak 2022", label: "berjalan nonstop di production" },
        tagline: "WhatsApp Cloud API resmi di dalam ERP: kirim invoice, pengingat pembayaran otomatis, dan inbox dua arah untuk tim penagihan.",
        summary:
            "Empat generasi integrasi WhatsApp yang saya bangun untuk satu perusahaan — dari gateway Node.js di 2022 sampai modul Cloud API native dengan inbox kustom, registri template, dan pelacakan biaya pesan.",
        role: "Product owner & lead engineer",
        problem:
            "Tim finance menagih secara manual, gateway tidak resmi sering putus, dan provider atau modul berbayar terlalu mahal untuk volume pesannya.",
        built: [
            "Modul Odoo: 24 model, ~5 ribu baris Python, ~1 ribu baris JS untuk widget inbox kustom",
            "Webhook, antrean pesan keluar, registri template, pencegah kirim ganda; penyimpanan chat hot/cold di database Postgres terpisah",
            "Template pengingat bayar dengan tombol “Minta Invoice” yang mengirim PDF di dalam jendela gratis 24 jam",
            "Inbox dengan konteks perusahaan, balas/kutip, composer yang paham jendela 24 jam, dan akses dua tingkat",
            "Laporan biaya pesan; sebelumnya gateway Node.js/Express untuk notifikasi cuti, inventory, dan antrean",
        ],
        design: [
            "Memilih Meta langsung dibanding provider berbayar setelah analisis titik impas (~3.300 pesan/bulan)",
            "Membangun inbox kustom daripada membeli modul berbayar",
            "Memastikan dari dokumentasi Meta bahwa pesan tidak bisa diedit/dihapus, lalu merancang edit lokal dengan jejak audit",
            "Caption + PDF dalam satu template, sehingga setiap notifikasi hanya ditagih sekali",
        ],
        impact: ["Berjalan di production untuk tim finance dan penagihan", "Satu-satunya committer di repo gateway sejak 2022"],
        stack: ["Odoo 15", "Python", "OWL / JS", "PostgreSQL", "WhatsApp Cloud API", "Node.js", "Socket.IO"],
        note: "Sistem internal — detail disamarkan.",
    },
    {
        id: "ipl-portal",
        title: "Portal Iuran Perumahan (IPL)",
        category: "Aplikasi & SaaS",
        year: "2026",
        status: "MVP",
        visual: "ledger",
        tagline: "Portal mandiri tempat warga mengecek tagihan iurannya sendiri dan melihat ke mana uang kas digunakan.",
        summary:
            "Portal Next.js + Supabase yang tersinkron dari Odoo 18 lokal — warga hanya melihat tagihannya sendiri, semua orang bisa melihat pengeluaran. MVP selesai dalam dua hari untuk satu blok berisi 59 rumah.",
        role: "Product owner & full-stack developer",
        problem:
            "Data tagihan ada di server ERP lokal yang tidak bisa diakses dari internet, sehingga pengurus menjawab pertanyaan saldo warga satu per satu lewat WhatsApp.",
        built: [
            "Aplikasi warga: dashboard, tagihan IPL dan kas, pengeluaran, profil, ganti password",
            "Admin: kelola warga & user, panel sinkronisasi dengan upload Excel 3 sheet dan log sinkronisasi",
            "Akses per baris: warga hanya melihat invoice miliknya; pengeluaran terbuka untuk transparansi",
            "Modul pendamping Odoo 18: wizard pembuatan invoice, sinkronisasi “Push ke Supabase”, laporan invoice ber-watermark, dashboard OWL",
            "Lanjutan: menelusuri selisih setoran bulanan sampai ke pembayaran di muka tanpa invoice, lalu menambahkan rincian setoran per bulan",
        ],
        design: [
            "PRD v1.2, rencana 9 fase, matriks peran, dan pemetaan field ERP → Excel → DB",
            "Navigasi bawah ala aplikasi mobile — warga membukanya dari WhatsApp",
        ],
        impact: ["MVP selesai dalam 2 hari (13 commit)", "Mencakup 59 rumah"],
        stack: ["Next.js 16", "React 19", "Tailwind 4", "shadcn/ui", "Supabase", "JWT", "Odoo 18"],
        links: [{ label: "Source code", href: "https://github.com/YogaListianto19/ipl-portal" }],
    },
    {
        id: "snap-payments",
        title: "Suite Pembayaran Bank SNAP",
        category: "ERP & Integrasi",
        year: "2021 – 2026",
        status: "Production",
        visual: "ledger",
        tagline: "Tagihan virtual account, rekonsiliasi otomatis, serta transfer vendor & payroll yang terkontrol di atas standar perbankan nasional SNAP.",
        summary:
            "Integrasi ERP ke bank dengan standar SNAP Bank Indonesia: tagihan VA dengan callback dan rekonsiliasi otomatis, plus modul transfer dengan kontrol maker-approver-releaser dan OTP WhatsApp.",
        role: "Integration engineer",
        problem:
            "Pembayaran dicocokkan ke invoice secara manual, dan transfer keluar butuh kontrol yang ketat sebelum tim finance berani memakai otomasi.",
        built: [
            "Tagihan Virtual Account dan callback dengan rekonsiliasi mutasi bank otomatis",
            "Transfer online / RTGS / SKN, transfer payroll massal, cek saldo, dan audit log API lengkap",
            "Peran Maker → Approver → Releaser, level persetujuan berdasarkan nominal, limit per user dan harian",
            "OTP WhatsApp: di-hash, kedaluwarsa 5 menit, dibekukan setelah gagal berulang, plus peringatan keamanan",
            "Layanan penandatanganan request (RSA/HMAC) dengan Flask, dari pekerjaan API bank pertama saya di 2021",
        ],
        design: ["Mendiagnosis serialization failure di production pada rekonsiliasi VA sampai empat penyebab berlapis, dengan SQL forensik"],
        impact: ["Berjalan di production untuk tim finance", "Menghapus pencocokan pembayaran manual untuk invoice VA"],
        stack: ["Odoo 15", "Python", "SNAP BI / BCA API", "Flask", "PostgreSQL", "OTP WhatsApp"],
        note: "Sistem internal — detail disamarkan.",
    },
    {
        id: "pos-workshop",
        title: "POS & Inventori Bengkel (Android)",
        category: "Aplikasi & SaaS",
        year: "2026",
        status: "Dalam pengembangan",
        visual: "mobile",
        tagline: "Aplikasi kasir untuk bengkel motor & mobil — kontrol stok atomik, komisi mekanik, piutang, dan data laba yang hanya bisa dilihat pemilik.",
        summary:
            "Backend lead di tim 3 orang. Saya merancang arsitektur dan backend Supabase dengan row-level security yang menyembunyikan HPP dan laba dari kasir, serta RPC atomik yang mencegah stok minus.",
        role: "Backend lead & arsitek (tim 3 orang)",
        problem: "Bengkel rugi karena selisih stok, input manual, rumitnya komisi dan piutang — dan data laba yang bisa dilihat semua kasir.",
        built: [
            "Skema Supabase (11 tabel) dengan uang dalam rupiah bulat (integer) dan kunci UUID",
            "Row-Level Security + masking view yang menyembunyikan kolom HPP dan laba dari kasir",
            "RPC SECURITY DEFINER: transaksi atomik (potong stok, komisi, anti-oversell), stock opname dengan susut otomatis tercatat sebagai beban, cicilan piutang",
            "Aplikasi Kotlin + Jetpack Compose: kasir, kelola, riwayat, dashboard; struk dibagikan ke WhatsApp atau PDF",
        ],
        ai: [
            "Dirancang untuk fase 4: pengenalan plat nomor di perangkat (ML Kit) dan OCR nota supplier dengan Gemini → JSON terstruktur yang dicocokkan ke SKU",
            "Konfirmasi manusia wajib sebelum hasil AI menyentuh stok atau HPP",
        ],
        design: [
            "PRD + desain teknis gabungan dengan 11 keputusan arsitektur (uang integer, UUIDv7, sinkronisasi otoritatif di server, HPP rata-rata bergerak)",
            "Me-review prototipe buatan AI dari rekan tim dan menemukan 5 bug kritis, termasuk uang bertipe float dan laba yang disimpan",
            "Pivot ke prototipe Supabase online-only agar sesuai anggaran nol",
        ],
        impact: ["Inti POS terverifikasi end-to-end di HP Android asli dalam 4 hari sejak blueprint"],
        stack: ["Kotlin", "Jetpack Compose", "Supabase", "PostgreSQL RLS", "PL/pgSQL", "Gemini (rencana)"],
    },
    {
        id: "mom-notetaker",
        title: "Notulen Rapat dengan AI Lokal",
        category: "AI & Otomasi",
        year: "2026",
        status: "Internal",
        visual: "dashboard",
        tagline: "Notulen rapat tanpa tagihan API: tangkap caption dan audio, transkripsi di laptop sendiri, lalu hasilkan prompt AI siap pakai.",
        summary:
            "Ekstensi Chrome untuk Meet, Teams, dan Zoom plus perekam desktop yang mentranskripsi secara lokal dengan Whisper — rapat 103 menit selesai dalam ~6 menit, tanpa biaya API.",
        role: "Dikerjakan sendiri",
        problem:
            "Banyak rapat stakeholder yang menjadi dasar spesifikasi, sementara notetaker berbayar mahal dan mengirim percakapan sensitif ke pihak ketiga.",
        built: [
            "Ekstensi Chrome MV3 untuk Google Meet, Teams, dan Zoom: membaca caption langsung, menandai catatan sebagai keputusan / tindakan / risiko",
            "Menyusun prompt AI yang dipecah per bagian, siap ditempel ke asisten mana pun",
            "Perekam desktop Python yang menangkap mic + audio sistem sekaligus (WASAPI loopback)",
        ],
        ai: [
            "Speech-to-text lokal dengan faster-whisper: rapat 103 menit ditranskripsi ~6 menit di laptop",
            "Menghasilkan prompt, bukan memanggil API — tanpa key, tanpa biaya, data tetap di perangkat",
        ],
        design: ["Sengaja dibuat ringan: tanpa backend, tanpa akun, tanpa perawatan"],
        impact: ["Dipakai untuk mengubah notulen rapat menjadi rencana CRM dan spesifikasi"],
        stack: ["Chrome Extension (MV3)", "JavaScript", "Python", "faster-whisper", "WASAPI"],
    },
    {
        id: "commission-loyalty",
        title: "Mesin Komisi Sales & Program Loyalitas",
        category: "ERP & Integrasi",
        year: "2025 – 2026",
        status: "Production",
        visual: "dashboard",
        tagline: "Komisi sales bertingkat yang dihitung otomatis dan program loyalitas pelanggan berbasis profit di dalam ERP.",
        summary:
            "Komisi dihitung dari pencapaian target bulanan dan kuartalan dengan level berbasis pricelist, plus tingkat loyalitas yang ditentukan dari profit riil setiap pelanggan.",
        role: "Lead developer",
        problem:
            "Komisi dihitung di spreadsheet setiap periode, dan level pelanggan ditentukan dari omzet, bukan dari keuntungan yang benar-benar dihasilkan.",
        built: [
            "Pencapaian per bulan/kuartal terhadap target, komisi indeks bertingkat (L0–L3) dari ambang pricelist",
            "Terhubung ke invoice, jadwal pembayaran, dan payroll",
            "Tingkat loyalitas berdasarkan laba kotor setelah HPP dan biaya finansial; poin yang bisa dipakai membayar invoice",
            "Level kolektibilitas dihitung ulang tiap malam; aturan bagi hasil",
        ],
        design: ["Dokumen serah terima dan manual pengguna untuk admin finance dan sales"],
        impact: ["Menggantikan perhitungan komisi manual di spreadsheet setiap akhir periode"],
        stack: ["Odoo 15", "Python", "PostgreSQL", "Laporan QWeb", "Cron job"],
        note: "Sistem internal — detail disamarkan.",
    },
    {
        id: "car-dealer-landing",
        title: "Landing Page Penjualan Dealer Mobil",
        category: "Aplikasi & SaaS",
        year: "2026",
        status: "Live",
        visual: "dashboard",
        tagline: "Situs penghasil lead untuk seorang sales mobil — daftar harga, simulasi kredit yang langsung terhubung ke WhatsApp, dan SEO lokal.",
        summary:
            "Proyek freelance: situs statis yang cepat, muncul di pencarian lokal, dan mengubah pengunjung menjadi percakapan WhatsApp lengkap dengan simulasi cicilan.",
        role: "Freelance — desain, build & SEO",
        problem: "Sang sales hanya mengandalkan postingan media sosial; ia butuh situs yang muncul di pencarian lokal dan mengubah pengunjung menjadi chat.",
        built: [
            "Daftar harga untuk 4 lini model; galeri dengan filter, lightbox, dan panel spesifikasi",
            "Kalkulator kredit (DP, tenor, cicilan) yang mengirim hasil simulasi ke WhatsApp",
            "Mode gelap, FAQ, profil sales; HTML/CSS/JS murni tanpa build step, di Netlify + domain sendiri",
        ],
        design: [
            "Funnel WhatsApp-first — setiap tombol berakhir di chat yang sudah terisi",
            "SEO lokal: JSON-LD (AutoDealer, penawaran mobil, FAQPage), sitemap, Open Graph, geo meta",
        ],
        impact: ["Live sejak Juni 2026"],
        stack: ["HTML", "CSS", "JavaScript", "JSON-LD", "Netlify", "GA4"],
    },
    {
        id: "erp-implementations",
        title: "Implementasi & Migrasi ERP",
        category: "ERP & Integrasi",
        year: "2025 – 2026",
        status: "Production",
        visual: "dashboard",
        tagline: "Implementasi Odoo end-to-end untuk 10+ perusahaan: produksi, penjualan, pembelian, stok, akuntansi, sampai laporan keuangan dan landed cost.",
        summary:
            "Proyek klien di Odoo 13 sampai 19, Community dan Enterprise — dari catatan batch produksi pabrik kosmetik dan alur konsinyasi distributor alat medis, sampai landed cost multi-mata uang dan upgrade ISP ke Odoo 19.",
        role: "Software engineer — implementasi & modul kustom",
        problem: "Setiap bisnis punya proses yang tidak tercakup ERP standar, ditambah risiko saat memigrasikan data yang sedang berjalan.",
        built: [
            "Manufaktur (pabrik kosmetik): catatan batch produksi, nomor batch & kedaluwarsa otomatis, rekonsiliasi yield teoritis vs aktual, kontrol revisi formula",
            "Penjualan sampai pengiriman: alur konsinyasi ke rumah sakit (booking → kirim → laporan pemakaian → tagih yang terpakai), satu invoice untuk beberapa pengiriman, retur & tukar per cabang",
            "Pembelian sampai penerimaan: permintaan → penawaran per supplier → pesanan berjenjang, QC saat barang datang, satu tagihan supplier dari banyak pesanan, tagihan impor dengan kurs kedatangan",
            "Inventory: kartu stok dengan lot & kedaluwarsa, reorder point per cabang, perbaikan valuasi average cost dan Standard → FIFO",
            "Akuntansi & laporan keuangan: laba rugi dan aging AR/AP per cabang, buku besar multi-mata uang, neraca kustom, e-Faktur Coretax",
            "Landed cost multi-mata uang: prorata dengan kurs tanggal bill, banyak penerimaan & banyak PO, nota kredit penyesuaian otomatis",
            "HR: migrasi riwayat cuti antar-perusahaan dengan satu transaksi SQL, dry run, dan rollback",
            "Go-live & migrasi: cutoff saldo awal semalam untuk retail, upgrade Odoo 15 → 19 untuk ISP, sinkronisasi jurnal Community → Enterprise via REST",
        ],
        design: [
            "Selalu dry run, backup, dan rollback sebelum menyentuh data production",
            "Dokumen kebutuhan, panduan UAT, dan panduan pengguna untuk setiap rollout",
        ],
        impact: [
            "10+ perusahaan, Odoo 13–19, Community & Enterprise",
            "330+ commit di 8 repositori klien",
            "Landed cost multi-mata uang: 29 kebutuhan fungsional, 32/32 tes lolos",
            "Mengajar kursus teknis Odoo 19 sebanyak 24 sesi (28 deck, 525 slide)",
        ],
        stack: ["Odoo 10–19", "Python", "PostgreSQL", "XML / QWeb", "OWL", "XML-RPC", "Docker"],
        note: "Nama klien tidak ditampilkan.",
    },
];

export const skillGroups = [
    {
        title: "Odoo (v10 → v19)",
        items: [
            "Modul kustom & inheritance",
            "Manufaktur (MRP)",
            "Penjualan: order → kirim → tagih (SO–DO)",
            "Pembelian: pesan → terima → bayar (PO–GR)",
            "Stok & valuasi",
            "Landed cost",
            "Akuntansi & e-Faktur",
            "Laporan keuangan",
            "HR & absensi",
            "Migrasi versi & data",
            "OWL & QWeb",
        ],
    },
    {
        title: "Integrasi & otomasi",
        items: ["WhatsApp Cloud API", "Bank SNAP / BCA API", "n8n", "REST & webhook", "JSON-RPC / XML-RPC", "Telegram Bot API", "Threads Graph API"],
    },
    {
        title: "AI engineering",
        items: [
            "Integrasi LLM (Gemini, Claude, OpenRouter)",
            "Output JSON terstruktur",
            "RAG & few-shot retrieval",
            "Workflow agent",
            "Guardrail & skor keyakinan",
            "Whisper speech-to-text",
            "Desain prompt",
        ],
    },
    {
        title: "Backend & data",
        items: ["Python", "PostgreSQL", "Node.js / Express", "Supabase (RLS, RPC)", "Prisma", "Flask", "Docker", "Socket.IO"],
    },
    {
        title: "Frontend & mobile",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Flutter", "Jetpack Compose"],
    },
    {
        title: "Produk & delivery",
        items: ["PRD & decision record", "User flow", "Prototipe yang bisa diklik", "UAT & QA", "Panduan pengguna", "Workshop stakeholder", "Handover & estimasi"],
    },
    {
        title: "Alur kerja berbantuan AI",
        items: ["Claude Code", "Agent skill kustom", "QA browser dengan AI", "Git / GitHub / GitLab CI", "Vercel", "Netlify"],
    },
];

export const experience = [
    {
        period: "Jul 2021 — Sekarang",
        role: "Business Analyst & Software Engineer",
        company: "PT Nexa Pasifik (sebelumnya PT Tetrasoft)",
        points: [
            "Memegang delivery sistem internal untuk distributor multi-cabang dari awal sampai akhir: diskusi stakeholder, PRD, prototipe, build, UAT, dan rollout.",
            "Membangun AI order agent di WhatsApp (n8n + LLM + ERP) yang sudah membuat 1.675+ sales order untuk ~25 sales.",
            "Merancang dan membangun CRM “super app” untuk 16 peran — pipeline lead-to-deal, kunjungan GPS, mesin terpasang — plus aplikasi sales lapangan Flutter.",
            "Memindahkan pesan perusahaan dari gateway Node.js (2022) ke WhatsApp Cloud API resmi di dalam ERP: kirim invoice, pengingat otomatis, dan inbox penagihan.",
            "Mengintegrasikan API bank SNAP untuk tagihan virtual account, rekonsiliasi otomatis, dan transfer terkontrol.",
            "Mengembangkan modul inti ERP perusahaan: laporan penjualan vs HPP dan profit per pelanggan, produk, dan cabang; lembur → payslip; serta komisi sales yang mengalir ke payroll.",
            "Menyusun framework delivery berbantuan AI untuk tim dan mempublikasikan Claude Code skill yang bisa dipakai ulang untuk pengembangan ERP, workflow n8n, dan estimasi task.",
        ],
        tags: ["Odoo 15", "Business analysis", "Integrasi API", "WhatsApp Cloud API", "SNAP API", "AI agent"],
    },
    {
        period: "Jan 2025 — Sekarang",
        role: "Freelance Software Engineer — Implementasi Odoo",
        company: "Independen, melalui partner implementasi Odoo",
        points: [
            "Implementasi, kustomisasi, dan migrasi Odoo untuk 10+ perusahaan — distributor multi-cabang, pabrik kosmetik, distributor alat medis, ISP, retail, properti, dan klinik — di Odoo 13–19 Community & Enterprise, dengan 330+ commit.",
            "Manufaktur: catatan batch produksi dan dokumen induk produksi, nomor batch & tanggal kedaluwarsa otomatis, rekonsiliasi yield teoritis vs aktual, kontrol revisi formula, dan approval in-process control.",
            "Penjualan, dari order sampai barang terkirim dan tertagih: alur konsinyasi ke rumah sakit yang hanya menagih barang terpakai, satu invoice untuk beberapa pengiriman, retur & tukar barang per cabang, dan pencegah pengiriman melebihi order.",
            "Pembelian, dari permintaan sampai barang diterima dan dibayar: permintaan pembelian → penawaran per supplier → pesanan dengan persetujuan berjenjang, QC saat barang datang, persetujuan untuk penerimaan kurang, dan satu tagihan supplier dari banyak pesanan.",
            "Inventory: kartu stok dengan lot & kedaluwarsa, reorder point per cabang (safety stock, lead time, stok dalam perjalanan), serta perbaikan valuasi average cost dan perpindahan Standard → FIFO.",
            "Akuntansi & laporan keuangan: laba rugi dan aging AR/AP per cabang, buku besar multi-mata uang, neraca kustom, e-Faktur Coretax, dan bill impor dengan kurs tanggal kedatangan.",
            "Landed cost multi-mata uang: alokasi prorata dengan kurs tanggal bill, satu biaya untuk banyak penerimaan dan banyak PO, serta nota kredit penyesuaian otomatis — 29 kebutuhan fungsional, 32/32 tes lolos.",
            "HR: migrasi riwayat cuti antar-perusahaan lewat satu transaksi SQL dengan dry run dan rollback, aturan lampiran cuti, serta kios absensi sidik jari (dalam pengembangan).",
            "Go-live & migrasi: cutoff saldo awal dalam satu malam untuk retail, upgrade Odoo 15 → 19 untuk ISP, dan sinkronisasi jurnal Community → Enterprise via REST — selalu dengan dry run, backup, dan rollback.",
            "Di luar Odoo: SaaS undangan pernikahan (live), portal iuran perumahan, landing page dengan SEO lokal, dan kursus teknis Odoo 19 sebanyak 24 sesi.",
        ],
        tags: ["Odoo 13–19", "Manufaktur", "Penjualan", "Pembelian", "Akuntansi", "Landed cost", "HR"],
    },
    {
        period: "Mar 2021 — Jul 2021",
        role: "Back-End Programmer",
        company: "PT Citra Niaga Teknologi, Bandung",
        points: ["Membangun aplikasi data sekolah dengan modul kustom Odoo 14: pendaftaran siswa, perencanaan kurikulum, dan data guru."],
        tags: ["Odoo 14", "Python", "PostgreSQL"],
    },
    {
        period: "Feb 2015 — Des 2020",
        role: "Staff Admin",
        company: "PT Trimandiri Plasindo, Cimahi",
        points: [
            "Mengoperasikan Oracle ERP untuk manufaktur: perencanaan produksi, laporan stock opname, dan analisis produksi per shift — fondasi bisnis di balik cara saya merancang sistem hari ini.",
        ],
        tags: ["Oracle ERP", "Operasional manufaktur"],
    },
];

export const processSteps = [
    {
        title: "Pahami alur hariannya",
        description: "Mulai dari transaksi yang dikerjakan setiap hari: order, produksi, kirim, tagih. Saya banyak bertanya dulu sebelum mengubah apa pun.",
        output: "Peta alur dan titik kontrol yang disepakati",
    },
    {
        title: "Mulai dari yang sederhana",
        description: "Alur inti dipasang lebih dulu supaya tim bisa lepas dari Excel. Kebutuhan lain ditambahkan sambil sistem berjalan.",
        output: "Sistem inti yang bisa langsung dicoba",
    },
    {
        title: "Latih bertahap",
        description: "Training per bagian, dimulai dari pekerjaan sehari-hari masing-masing. Masa awal dipakai untuk membiasakan diri; salah input dibetulkan bersama.",
        output: "Panduan pengguna dan pendampingan sampai lancar",
    },
    {
        title: "Jaga datanya",
        description: "Setiap permintaan perubahan didiskusikan dulu: apakah datanya tetap konsisten dan bisa dipercaya? Baru setelah itu dikerjakan, diuji, dan dirilis.",
        output: "Data yang bisa dipercaya pemilik usaha",
    },
];

export const engagementModels = [
    {
        title: "Proyek lingkup tetap",
        description: "Ruang lingkup dan biaya disepakati di awal, dibayar per tahap. Cocok untuk modul kustom, integrasi, atau migrasi versi.",
    },
    {
        title: "Retainer bulanan",
        description: "Pengembangan dan dukungan berkelanjutan untuk Odoo yang sudah berjalan: perbaikan, fitur baru, dan laporan.",
    },
    {
        title: "Konsultasi & audit",
        description: "Menilai alur kerja atau sistem yang sudah ada, lalu memberi rekomendasi tertulis dan rencana langkahnya.",
    },
];

export const contact = {
    headline: "Punya ide produk, atau alur kerja yang",
    emphasis: "menyita waktu tim Anda?",
    sub: "Ceritakan apa yang ingin Anda capai. Saya balas dalam 24 jam dengan pertanyaan, gambaran pendekatan, dan apakah saya orang yang tepat.",
    // TODO(Yoga): isi email pribadi — kartunya tampil otomatis setelah diisi.
    email: "",
    // Nomor dalam format internasional (tanpa 0 / +) untuk link click-to-chat wa.me
    whatsapp: "6289694331588",
    whatsappLabel: "+62 896-9433-1588",
    whatsappText: "Halo Yoga, saya melihat portofolio Anda dan ingin mendiskusikan sebuah proyek.",
    linkedin: "https://www.linkedin.com/in/yoga-listianto-87153a208/",
    github: "https://github.com/YogaListianto19",
};
