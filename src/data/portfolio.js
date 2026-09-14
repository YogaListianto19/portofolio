import {
    Bot,
    Layers,
    PenTool,
    Workflow,
    Code2,
    Server,
    BrainCircuit,
    Palette,
    Database,
    Wrench,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Client/employer systems are described generically on purpose — no customer
// names, amounts, or credentials. Metrics are aggregate numbers only.
// ---------------------------------------------------------------------------

export const profile = {
    name: "Yoga Listianto",
    shortRole: "Full Stack & AI Engineer",
    roles: ["Full Stack Engineer", "AI Engineer", "Product Designer"],
    availability: "Available for freelance · Remote, GMT+7",
    location: "Bandung, Indonesia",
    headline: {
        before: "I design, build & ship",
        highlight: "AI-powered products",
        after: " — from first sketch to production.",
    },
    subheadline:
        "5+ years turning messy business workflows into software people use every day: LLM agents on WhatsApp, SaaS web apps, and ERP integrations that move real orders and real money.",
    ctaPrimary: "See case studies",
    ctaSecondary: "Start a project",
    avatar: "https://github.com/YogaListianto19.png",
};

export const stats = [
    { value: "5+ yrs", label: "Shipping business software" },
    { value: "1,675+", label: "Sales orders created by my AI agent" },
    { value: "10+", label: "Companies running systems I built" },
    { value: "3 wks", label: "Idea → live SaaS, in 5 sprints" },
];

export const heroConsole = {
    title: "whatsapp-order-agent.log",
    lines: [
        { tag: "in", tone: "info", text: "\"toko sinar: 5 roll A70 1.8x500, tempo 30\"" },
        { tag: "ai", tone: "ai", text: "parsed 1 line · customer matched · SKU confidence 0.93" },
        { tag: "erp", tone: "info", text: "stock 42 roll @ WH-Bandung · credit limit ok" },
        { tag: "wa", tone: "warn", text: "preview sent → waiting for sales rep: Y / N" },
        { tag: "done", tone: "ok", text: "Y → sales order created · alias learned" },
    ],
    caption: "Illustrative run of the WhatsApp → LLM → ERP order agent I built. No real customer data shown.",
};

export const aboutData = {
    title: "An engineer who thinks in products",
    paragraphs: [
        "I'm Yoga, a developer based in Bandung, Indonesia. I started on the operations side — six years running an Oracle ERP in a manufacturing plant — so I learned how businesses actually work before I learned how to code for them.",
        "Since 2021 I've built ERP modules, bank and WhatsApp integrations, and more recently AI agents and SaaS products. In my current role I work as a business analyst and engineer: I run the stakeholder sessions, write the PRD, design the flow and a clickable prototype, then build, test, and roll it out.",
        "AI is part of both what I build and how I build. Inside products: LLM agents, retrieval-augmented prompts, speech-to-text, OCR. In my workflow: Claude Code with custom agent skills I wrote for my team, plus AI-driven browser QA — which is how I ship in weeks, not quarters.",
    ],
    facts: [
        { label: "Based in", value: "Bandung, ID (GMT+7)" },
        { label: "Experience", value: "5+ years in software" },
        { label: "Focus", value: "Full stack · AI · Product" },
        { label: "Languages", value: "Indonesian, English" },
        { label: "Work style", value: "Remote, async-friendly" },
    ],
    highlights: [
        "Writes PRDs, decision records & UAT plans — not just code",
        "LLM agents with guardrails and human-in-the-loop",
        "Next.js / React, Node.js, Python, PostgreSQL",
        "WhatsApp Cloud API & bank (SNAP) payment integrations",
        "Deep ERP experience: Odoo 10 → 19",
        "AI-accelerated delivery with Claude Code",
    ],
};

export const services = [
    {
        icon: Bot,
        title: "AI agents & automation",
        description:
            "LLM-powered assistants that do real work — parse orders, triage messages, answer from your knowledge base — with confidence thresholds, logging, and human approval where it matters.",
        deliverables: ["WhatsApp / Telegram bots", "n8n workflows", "RAG & few-shot prompting", "Document OCR", "Guardrails & logging"],
    },
    {
        icon: Layers,
        title: "SaaS & web apps",
        description:
            "Full-stack products from MVP to paying customers: auth and roles, admin tools, dashboards, pricing logic, and payments — deployed and tested on real devices.",
        deliverables: ["Next.js / React", "Node.js / Python APIs", "PostgreSQL / Supabase", "Role-based access", "Vercel / Docker"],
    },
    {
        icon: PenTool,
        title: "Product design & discovery",
        description:
            "Before code, I map the workflow, write the PRD, and build a clickable prototype you can tap through on your phone — so we validate the right thing first.",
        deliverables: ["PRD & user flows", "Clickable prototypes", "UI design systems", "UAT & user guides"],
    },
    {
        icon: Workflow,
        title: "ERP & integrations",
        description:
            "Connect the systems your business already runs on: Odoo customization and migration, WhatsApp Cloud API, bank payment APIs, and data sync between ERP and web apps.",
        deliverables: ["Odoo 10–19 modules", "WhatsApp Cloud API", "Bank SNAP / VA", "REST & webhooks", "SQL reports"],
    },
];

export const projectFilters = ["All", "AI & Automation", "Apps & SaaS", "ERP & Integrations"];

export const projects = [
    {
        id: "wa-order-agent",
        title: "WhatsApp AI Sales Order Agent",
        category: "AI & Automation",
        year: "2026",
        status: "In production",
        visual: { kind: "chat", accent: "emerald" },
        tagline: "Sales reps type orders in shorthand on WhatsApp; an LLM turns them into confirmed sales orders in the ERP.",
        summary:
            "An LLM agent that reads free-form WhatsApp orders from ~25 field sales reps, checks stock, price and credit in the ERP, and creates sales orders after the rep confirms. It learns new product aliases from confirmed orders.",
        role: "Product owner, AI & integration engineer",
        problem:
            "Field sales sent orders as free-form chat. Customer service re-typed every one into the ERP — slow, error-prone, and blind to stock and credit limits.",
        built: [
            "43-node n8n workflow on the official WhatsApp Cloud API",
            "Live ERP lookups over JSON-RPC: stock, pricing, customers, receivables",
            "Warehouse routing by customer province, with cross-warehouse fallback (16 warehouses)",
            "Special-price syntax, payment terms, salesperson resolved from the sender's number",
            "Commission calculated automatically when the order is created; Telegram alerts on failures",
        ],
        ai: [
            "LLM (Gemini 2.5 Flash via OpenRouter) parses shorthand into structured lines: customer, SKU, qty, price, terms",
            "Retrieval-augmented prompts: candidate products from the ERP + confirmed past orders as few-shot examples + a phrase→SKU alias table",
            "Self-learning loop that only learns from rep-confirmed orders, with stricter thresholds for ambiguous aliases",
            "Every parse logged with a confidence score; the bot asks instead of guessing",
        ],
        design: [
            "Principle I set: \"a wrong variant is worse than not found\" — preview + explicit Y/N before anything is written",
            "Wrote the order-format guide for reps and a \"how our AI learns\" explainer for management",
            "Moved through 4 WhatsApp gateways to reach a reliable one: Evolution API → own Node gateway → Baileys → Meta Cloud API",
        ],
        impact: [
            "1,675+ sales orders created by the agent",
            "Used daily by ~25 sales reps",
            "Vocabulary grew 298 → 445 terms; terms the AI actively uses 60 → 200",
            "Warehouse coverage expanded 11 → 16",
        ],
        stack: ["n8n", "LLM (Gemini)", "OpenRouter", "WhatsApp Cloud API", "Odoo JSON-RPC", "PostgreSQL", "Telegram Bot"],
        note: "Internal system for a multi-branch distributor — details anonymized.",
    },
    {
        id: "wedding-saas",
        title: "Digital Wedding Invitation SaaS",
        category: "Apps & SaaS",
        year: "2026",
        status: "Live",
        visual: { kind: "invite", accent: "rose" },
        tagline: "A done-for-you invitation product: one Google Form in, a personalised WhatsApp link for every guest out.",
        summary:
            "A multi-surface Next.js SaaS — guest invitation, admin panel, customer portal, and a QR check-in scanner — with a theme engine that produces 24 curated designs. Shipped in 5 sprints over ~3 weeks.",
        role: "Founder-engineer — product, pricing, UX & full-stack build",
        problem:
            "Couples want a beautiful invitation without learning a builder tool, and the studio needed a low-priced entry product that upsells photo & video packages without drowning in manual work.",
        built: [
            "Four surfaces in one app: per-guest invitation pages, admin panel, token-based customer portal (no account needed), PIN-protected QR check-in for the wedding day",
            "Theme \"recipe\" engine: 5 layouts × 12 palettes × 6 font pairings × 4 covers × 4 motion styles → 24 curated themes, contrast-checked by script",
            "RSVP + moderated guestbook, digital gift (bank transfer / QRIS), religion presets",
            "Google Form CSV import with field mapping → draft invitation; bulk personalised guest links with WhatsApp text",
            "DRAFT → REVIEW → PUBLISHED state machine gated on payment; pricing engine with duration × add-ons × bundles",
            "Visit analytics, cron-driven expiry, expired pages that turn into renewal offers",
        ],
        design: [
            "PRD with 4 personas (admin, couple, guest, committee) and 3 core flows",
            "Mobile-first: nearly every open happens inside WhatsApp's in-app browser",
            "Two deliberate design languages — a dense admin UI and an emotional invitation UI",
            "Designed the pricing: 3 duration tiers plus add-ons and bundles",
            "Automated QA: 12 check scripts incl. 4-timezone tests and real-Chrome layout tests at 5 widths",
        ],
        impact: [
            "Live on Vercel with a working order form",
            "5 sprints, 29 commits, 23 data models in ~3 weeks",
        ],
        stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind v4", "shadcn/ui", "Prisma", "Neon Postgres", "Vercel"],
        links: [
            { label: "Live site", href: "https://undangan-ns.vercel.app" },
            { label: "Sample invitation", href: "https://undangan-ns.vercel.app/alex-love-aruna" },
        ],
    },
    {
        id: "crm-super-app",
        title: "Field Sales CRM \"Super App\"",
        category: "ERP & Integrations",
        year: "2026",
        status: "Pilot",
        visual: { kind: "mobile", accent: "rose" },
        tagline: "One CRM for marketing, sales, engineering & procurement — lead-to-deal pipeline, GPS visit check-ins, installed-base tracking.",
        summary:
            "I led discovery, wrote the PRD and decision records, prototyped 14 mobile screens plus a management dashboard, and built the ERP-native CRM for 16 roles with a Flutter field-sales app.",
        role: "Business analyst, product designer & lead developer",
        problem:
            "Leads, visits, proposals and installed machines were tracked across spreadsheets and chats. Management had no single funnel view, and 16 roles needed different access.",
        built: [
            "Odoo 15 module: 28 models, ~10k lines of Python, ~7k lines of XML, OWL dashboards",
            "Lead → Contact → Deal pipeline with a Need / Budget / Intent qualification gate, returning-lead rule, first-touch attribution",
            "15 permission groups with record rules and an append-only audit log",
            "GPS visit check-in validated against verified customer coordinates",
            "Deal → sales order wizard, installed-base & machine-issue desk, single-screen lead & deal report with MQL vs SQL funnel",
            "Flutter field-sales app scaffold: offline-first SQLite, GPS & selfie check-in, biometric login",
        ],
        ai: [
            "Designed for the next phase: AI chat summaries, next-stage suggestions and business-card OCR",
        ],
        design: [
            "PRD, 19 locked decisions with reasoning, and a 1,200-line module plan",
            "Clickable HTML prototype: 14 phone screens + a desktop \"management room\", iterated on management feedback",
            "Gap analysis of a stakeholder's 15-part \"ideal CRM\" brief — ~70% already covered, which avoided a costly rebuild",
            "Pivoted from a separate NestJS/Next.js stack to ERP-native to cut integration cost",
        ],
        impact: [
            "Rolling out to ~50 users through a 5-person pilot",
            "UAT: 26/26 checks passed via RPC and 5/5 in the UI before release",
            "Tested against a production copy with ~12k partners and ~41k sales orders",
        ],
        stack: ["Odoo 15", "Python", "OWL", "PostgreSQL", "Flutter", "Riverpod", "SQLite", "JSON-RPC"],
        note: "Internal system — screenshots withheld; the thumbnail is illustrative.",
    },
    {
        id: "threads-ai-agent",
        title: "Threads AI Comment Agent",
        category: "AI & Automation",
        year: "2026",
        status: "In development",
        visual: { kind: "flow", accent: "violet" },
        tagline: "AI triage and on-brand replies for a studio's Threads account — eight guardrails and a human in the loop.",
        summary:
            "Five n8n workflows that ingest comments, classify them with a fast model, draft knowledge-base-grounded replies with a main model, and push hot leads to a Telegram lead board.",
        role: "Product owner & AI/automation engineer",
        problem:
            "100+ comments a day. The owner spent ~2 hours daily replying by hand, and hot leads got buried among spam.",
        built: [
            "5 workflows: token refresh, comment ingest, AI triage & reply, lead board, daily report",
            "Supabase data layer (5 tables) with RLS locked to the service role",
            "Telegram control room with inline buttons to move leads NEW → CONTACTED → NEGOTIATION → DEPOSIT, idempotent",
        ],
        ai: [
            "Two-model pipeline: a fast model classifies each comment with JSON-schema output; a main model drafts replies grounded in a knowledge base with a brand persona",
            "8 safety layers: system prompt, kill switch, rate limits, anti-loop, schema validation, confidence ≥ 0.80, regex blocklist for prices & guarantees, Telegram approval fallback",
            "Spam auto-hidden, complaints escalated, hot leads pushed to the lead board",
        ],
        design: [
            "PRD with explicit non-goals — no DM automation, since the API doesn't support it and scraping breaks the terms",
            "Provider-agnostic LLM layer so the model can be swapped on cost or quality",
        ],
        impact: [
            "Targets: first reply in under 15 minutes; owner time from ~2 h to under 15 min a day",
        ],
        stack: ["n8n", "LLM (provider-agnostic)", "Threads Graph API", "Supabase", "Telegram Bot", "Docker", "Cloudflare Tunnel"],
    },
    {
        id: "wa-cloud-erp",
        title: "WhatsApp Cloud Inbox & Collections for ERP",
        category: "ERP & Integrations",
        year: "2022 – 2026",
        status: "In production",
        visual: { kind: "chat", accent: "blue" },
        tagline: "Official WhatsApp Cloud API built into the ERP: invoice delivery, automated payment reminders, and a two-way inbox for collections.",
        summary:
            "Four generations of WhatsApp integration I built for one company — from Node.js gateways in 2022 to a native Cloud API module with a custom inbox, template registry and message-cost tracking.",
        role: "Product owner & lead engineer",
        problem:
            "Finance chased payments by hand, unofficial gateways kept breaking, and paid providers or modules were expensive for the message volume.",
        built: [
            "Odoo module: 24 models, ~5k lines of Python, ~1k lines of JS for a custom inbox widget",
            "Webhook, outbound queue, template registry, double-send guard; hot/cold chat storage in a separate Postgres DB",
            "Payment-reminder template with a \"Request invoice\" quick reply that returns the PDF inside the free 24-hour window",
            "Inbox with company context, reply/quote, a composer aware of the 24-hour window, two-tier access",
            "Message-cost report; earlier Node.js/Express gateways for leave, inventory and queue notifications",
        ],
        design: [
            "Chose Meta-direct over a paid provider after a break-even analysis (~3.3k messages/month)",
            "Built a custom inbox instead of buying a paid module",
            "Confirmed from Meta docs that edit/delete isn't possible, then designed local-only edit with an audit trail",
            "Caption + PDF in one template so each notification is billed once",
        ],
        impact: [
            "Live in production for the finance and collections team",
            "Sole committer on the gateway repos since 2022",
        ],
        stack: ["Odoo 15", "Python", "OWL / JS", "PostgreSQL", "WhatsApp Cloud API", "Node.js", "Socket.IO"],
        note: "Internal system — details anonymized.",
    },
    {
        id: "ipl-portal",
        title: "Housing Dues Portal",
        category: "Apps & SaaS",
        year: "2026",
        status: "MVP",
        visual: { kind: "ledger", accent: "cyan" },
        tagline: "A self-service portal where residents check their own dues and see exactly where the community money goes.",
        summary:
            "Next.js + Supabase portal synced from an on-premise Odoo 18 — residents see only their own bills, everyone sees expenses. Built as an MVP in two days for a 59-household block.",
        role: "Product owner & full-stack developer",
        problem:
            "Billing lived on a local ERP server unreachable from the internet, so the committee answered every resident's balance question one by one on WhatsApp.",
        built: [
            "Resident app: dashboard, dues and community-fund bills, expenses, profile, password change",
            "Admin: resident & user management, sync panel with 3-sheet Excel upload and sync logs",
            "Row-level access: residents see only their own invoices; expenses are public for transparency",
            "Companion Odoo 18 modules: invoice-generation wizards, \"Push to Supabase\" sync, watermarked invoice report, OWL dashboard",
            "Follow-up: traced a monthly deposit mismatch to advance payments without invoices, then added a per-month deposit breakdown",
        ],
        design: [
            "PRD v1.2, 9-phase plan, role matrix, and a field map ERP → Excel → DB",
            "Mobile bottom navigation — residents open it from WhatsApp",
        ],
        impact: ["MVP built in 2 days (13 commits)", "Covers 59 households"],
        stack: ["Next.js 16", "React 19", "Tailwind 4", "shadcn/ui", "Supabase", "JWT", "Odoo 18"],
        links: [{ label: "Source code", href: "https://github.com/YogaListianto19/ipl-portal" }],
    },
    {
        id: "snap-payments",
        title: "Bank SNAP Payments Suite",
        category: "ERP & Integrations",
        year: "2021 – 2026",
        status: "In production",
        visual: { kind: "ledger", accent: "blue" },
        tagline: "Virtual-account billing, automatic reconciliation, and controlled vendor & payroll transfers on the national SNAP banking standard.",
        summary:
            "ERP-to-bank integration on Bank Indonesia's SNAP standard: VA billing with callbacks and auto-reconciliation, plus a transfer module with maker-approver-releaser controls and WhatsApp OTP.",
        role: "Integration engineer",
        problem:
            "Payments were matched to invoices by hand, and outgoing transfers needed proper controls before the finance team could trust automation.",
        built: [
            "Virtual Account billing and callbacks with automatic bank-statement reconciliation",
            "Online / RTGS / SKN transfer, bulk payroll transfer, balance inquiry, full API audit log",
            "Maker → Approver → Releaser roles, approval levels scaled by amount, per-user and daily limits",
            "WhatsApp OTP: hashed, 5-minute expiry, freeze after repeated failures, security alerts",
            "Request-signing service (RSA/HMAC) in Flask, from my first bank API work in 2021",
        ],
        design: [
            "Diagnosed a production serialization failure in VA reconciliation down to four layered causes, with forensic SQL",
        ],
        impact: ["Live in production for finance", "Removed manual payment matching for VA invoices"],
        stack: ["Odoo 15", "Python", "SNAP BI / BCA API", "Flask", "PostgreSQL", "WhatsApp OTP"],
        note: "Internal system — details anonymized.",
    },
    {
        id: "pos-workshop",
        title: "Workshop POS & Inventory (Android)",
        category: "Apps & SaaS",
        year: "2026",
        status: "In development",
        visual: { kind: "mobile", accent: "amber" },
        tagline: "Point of sale for motorcycle & car repair shops — atomic stock control, mechanic commission, receivables, and owner-only profit data.",
        summary:
            "Backend lead in a 3-person team. I designed the architecture and a Supabase backend with row-level security that hides cost and profit from cashiers, and atomic RPCs that prevent overselling.",
        role: "Backend lead & architect (team of 3)",
        problem:
            "Repair shops lose money on stock discrepancies, manual entry, commission and receivable complexity — and profit data visible to every cashier.",
        built: [
            "Supabase schema (11 tables) with integer-rupiah money and UUID keys",
            "Row-Level Security + masking views that hide cost and profit columns from cashiers",
            "SECURITY DEFINER RPCs: atomic transaction (stock deduction, commission, anti-oversell), stock-take with shrinkage auto-booked as expense, receivable instalments",
            "Kotlin + Jetpack Compose app: cashier, manage, history, dashboard; receipts shared to WhatsApp or PDF",
        ],
        ai: [
            "Designed for phase 4: on-device licence-plate recognition (ML Kit) and supplier-invoice OCR with Gemini → structured JSON matched to SKUs",
            "Human confirmation required before AI output can touch stock or cost of goods",
        ],
        design: [
            "Merged PRD + technical design with 11 architecture decisions (integer money, UUIDv7, server-authoritative sync, moving-average COGS)",
            "Reviewed a teammate's AI-generated prototype and caught 5 critical bugs, including float money and stored profit",
            "Pivoted to an online-only Supabase prototype to fit a zero budget",
        ],
        impact: ["Core POS verified end-to-end on a real Android phone within 4 days of the blueprint"],
        stack: ["Kotlin", "Jetpack Compose", "Supabase", "PostgreSQL RLS", "PL/pgSQL", "Gemini (planned)"],
    },
    {
        id: "mom-notetaker",
        title: "Meeting Notetaker with Local AI",
        category: "AI & Automation",
        year: "2026",
        status: "Internal",
        visual: { kind: "dashboard", accent: "violet" },
        tagline: "Meeting notes without an API bill: capture captions and audio, transcribe locally, and generate ready-to-use AI prompts.",
        summary:
            "A Chrome extension for Meet, Teams and Zoom plus a desktop recorder that transcribes locally with Whisper — a 103-minute meeting in about 6 minutes, with zero API cost.",
        role: "Solo builder",
        problem:
            "Many stakeholder meetings fed into specs, and paid notetakers were costly and sent sensitive conversations to third parties.",
        built: [
            "Chrome MV3 extension for Google Meet, Teams and Zoom: reads live captions, tags notes as decision / action / risk",
            "Builds a chunked, copy-paste AI prompt ready for any assistant",
            "Python desktop recorder capturing mic + system audio at once (WASAPI loopback)",
        ],
        ai: [
            "Local speech-to-text with faster-whisper: 103-minute meeting transcribed in ~6 minutes on a laptop",
            "Prompt generation instead of API calls — no keys, no cost, data stays on the machine",
        ],
        design: ["Deliberately lightweight: no backend, no account, nothing to maintain"],
        impact: ["Used to turn meeting minutes into CRM plans and specifications"],
        stack: ["Chrome Extension (MV3)", "JavaScript", "Python", "faster-whisper", "WASAPI"],
    },
    {
        id: "commission-loyalty",
        title: "Sales Commission & Loyalty Engine",
        category: "ERP & Integrations",
        year: "2025 – 2026",
        status: "In production",
        visual: { kind: "dashboard", accent: "emerald" },
        tagline: "Automatic multi-level sales commission and a profit-based customer loyalty program inside the ERP.",
        summary:
            "Commission computed from achievement against monthly and quarterly targets with pricelist-based levels, plus loyalty tiers driven by each customer's real profitability.",
        role: "Lead developer",
        problem:
            "Commission was calculated in spreadsheets every period, and customer tiers were based on revenue instead of what each customer actually earned the business.",
        built: [
            "Achievement per month/quarter against targets, multi-level index commission (L0–L3) from pricelist thresholds",
            "Linked to invoices, payment schedules and payroll",
            "Loyalty tiers based on gross profit after COGS and finance cost; points that can pay invoices",
            "Collection levels recalculated by nightly jobs; profit-sharing rules",
        ],
        design: ["Handover document and user manual for finance and sales admins"],
        impact: ["Replaced period-end spreadsheet commission runs"],
        stack: ["Odoo 15", "Python", "PostgreSQL", "QWeb reports", "Cron jobs"],
        note: "Internal system — details anonymized.",
    },
    {
        id: "car-dealer-landing",
        title: "Car Dealer Sales Landing Page",
        category: "Apps & SaaS",
        year: "2026",
        status: "Live",
        visual: { kind: "dashboard", accent: "blue" },
        tagline: "A lead-gen site for a car sales consultant — price lists, a credit simulator that hands off to WhatsApp, and local SEO.",
        summary:
            "Freelance project: a fast static site that ranks for local searches and turns visitors into WhatsApp conversations with a ready-made loan simulation.",
        role: "Freelance — design, build & SEO",
        problem:
            "The consultant relied on social posts; he needed a site that shows up in local search and converts visitors into chats.",
        built: [
            "Price lists for 4 model lines; filterable gallery with lightbox and spec panel",
            "Loan calculator (down payment, tenor, instalment) that sends the simulation to WhatsApp",
            "Dark mode, FAQ, consultant profile; vanilla HTML/CSS/JS with no build step, on Netlify + custom domain",
        ],
        design: [
            "WhatsApp-first funnel — every CTA ends in a pre-filled chat",
            "Local SEO: JSON-LD graph (AutoDealer, Car offers, FAQPage), sitemap, Open Graph, geo meta",
        ],
        impact: ["Live since June 2026"],
        stack: ["HTML", "CSS", "JavaScript", "JSON-LD", "Netlify", "GA4"],
    },
    {
        id: "erp-implementations",
        title: "ERP Implementations & Migrations",
        category: "ERP & Integrations",
        year: "2021 – 2026",
        status: "In production",
        visual: { kind: "dashboard", accent: "cyan" },
        tagline: "Odoo customization, go-lives and version migrations for 10+ companies across distribution, manufacturing, ISP, retail and property.",
        summary:
            "Client work across Odoo 10 to 19, Community and Enterprise — from a cosmetics manufacturer's batch records to an ISP's migration from Odoo 15 to 19.",
        role: "Odoo technical engineer",
        problem:
            "Each business had processes the standard ERP didn't cover, plus the risk that comes with migrating live data.",
        built: [
            "Manufacturer: procurement workspace (requisition → RFQ → PO → receipt → bill → asset), batch production records, approval workflows",
            "ISP: migration from Odoo 15 to 19, 50+ subscriber fields, 11 legacy helpdesk modules consolidated",
            "Distributor: branch reorder points (target, safety stock, lead time), stock card, branch P&L",
            "Indonesian e-tax (Coretax) invoice export ported across Odoo 12, 17, 18 and 19",
            "Token-secured REST sync of journal entries from Community to Enterprise",
            "Data migrations with dry runs and rollback; opening balances, lots, assets; costing change to FIFO",
        ],
        design: ["User guides and go-live checklists for each rollout"],
        impact: ["10+ companies on systems I customized or migrated", "Also taught a 24-session Odoo 19 technical course (28 decks, 525 slides)"],
        stack: ["Odoo 10–19", "Python", "PostgreSQL", "XML / QWeb", "OWL", "XML-RPC", "Docker"],
        note: "Client names withheld.",
    },
];

export const skillGroups = [
    {
        icon: BrainCircuit,
        title: "AI engineering",
        items: [
            "LLM integration (Gemini, Claude, OpenRouter)",
            "Structured JSON output",
            "RAG & few-shot retrieval",
            "Agent workflows",
            "Guardrails & confidence scoring",
            "Whisper speech-to-text",
            "Prompt design",
        ],
    },
    {
        icon: Code2,
        title: "Frontend & mobile",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "OWL (Odoo JS)", "Flutter", "Jetpack Compose"],
    },
    {
        icon: Server,
        title: "Backend & data",
        items: ["Python", "Node.js / Express", "REST & webhooks", "PostgreSQL", "Prisma", "Supabase (RLS, RPC)", "Flask", "Docker", "Socket.IO"],
    },
    {
        icon: Workflow,
        title: "Automation & integrations",
        items: ["n8n", "WhatsApp Cloud API", "Telegram Bot API", "Threads Graph API", "Bank SNAP / BCA API", "JSON-RPC / XML-RPC", "Chrome extensions"],
    },
    {
        icon: Palette,
        title: "Product & design",
        items: ["PRDs & decision records", "User flows", "Clickable prototypes", "Google Stitch", "Design systems", "UAT & QA", "User guides", "Stakeholder workshops"],
    },
    {
        icon: Database,
        title: "ERP (Odoo 10 → 19)",
        items: ["Sales & CRM", "Inventory", "Accounting", "Purchase", "Manufacturing", "HR & payroll", "QWeb reports", "Data migration"],
    },
    {
        icon: Wrench,
        title: "AI-accelerated workflow",
        items: ["Claude Code", "Custom agent skills", "AI browser QA", "Git / GitHub / GitLab CI", "Vercel", "Netlify"],
    },
];

export const experience = [
    {
        period: "Jul 2021 — Present",
        role: "Business Analyst & Software Engineer",
        company: "PT Nexa Pasifik (formerly PT Tetrasoft)",
        points: [
            "Own delivery of internal systems for a multi-branch distributor end to end: stakeholder sessions, PRDs, prototypes, build, UAT and rollout.",
            "Built a WhatsApp AI order agent (n8n + LLM + ERP) that has created 1,675+ sales orders for ~25 sales reps.",
            "Designed and built a CRM \"super app\" for 16 roles — lead-to-deal pipeline, GPS visits, installed base — plus a Flutter field-sales app.",
            "Moved company messaging from Node.js gateways (2022) to the official WhatsApp Cloud API inside the ERP: invoice delivery, auto reminders, collections inbox.",
            "Integrated bank SNAP APIs for virtual-account billing, auto-reconciliation and controlled transfers.",
            "Wrote the team's AI-assisted delivery framework and published reusable Claude Code skills for ERP development, n8n workflows and task estimation.",
        ],
        tags: ["Product ownership", "AI agents", "Odoo 15", "WhatsApp Cloud API", "SNAP API", "Flutter"],
    },
    {
        period: "2025 — Present",
        role: "Freelance Full Stack & Odoo Engineer",
        company: "Independent",
        points: [
            "Odoo implementations and migrations for 10+ companies: distribution, manufacturing, ISP, retail and property (Odoo 13–19, Community & Enterprise).",
            "Launched my own products: a wedding-invitation SaaS (Next.js, live) and a housing dues portal (Next.js + Supabase).",
            "Built a lead-gen landing page with local SEO for a car sales consultant.",
            "Designed and taught a 24-session Odoo 19 technical course for a functional consultant moving into development.",
        ],
        tags: ["Next.js", "Supabase", "Odoo 19", "Teaching"],
    },
    {
        period: "Mar 2021 — Jul 2021",
        role: "Back-End Programmer",
        company: "PT Citra Niaga Teknologi, Bandung",
        points: ["Built a school data application with Odoo 14 custom modules: student enrolment, curriculum planning, teacher records."],
        tags: ["Odoo 14", "Python", "PostgreSQL"],
    },
    {
        period: "Feb 2015 — Dec 2020",
        role: "Staff Admin",
        company: "PT Trimandiri Plasindo, Cimahi",
        points: [
            "Operated Oracle ERP for manufacturing: production planning, stock-take reports and shift production analysis — the business foundation behind how I design systems today.",
        ],
        tags: ["Oracle ERP", "Manufacturing ops"],
    },
];

export const processSteps = [
    {
        title: "Discover",
        description: "We map the real workflow, who touches it, and what \"done\" looks like. I ask the awkward questions early.",
        output: "Scope, PRD and a fixed estimate",
    },
    {
        title: "Design",
        description: "User flows and a clickable prototype you can tap through on your phone before any production code is written.",
        output: "Prototype + UI direction",
    },
    {
        title: "Build",
        description: "Weekly increments with an AI-accelerated workflow, code review, and automated checks on real devices.",
        output: "Working software every week",
    },
    {
        title: "Ship & support",
        description: "Deploy, UAT with your team, user guides, and monitoring. AI features ship with logs and guardrails.",
        output: "Live product + handover docs",
    },
];

export const engagementModels = [
    {
        title: "Fixed-scope project",
        description: "A clear PRD and milestone-based payments. Best for MVPs, landing pages, bots and integrations.",
    },
    {
        title: "Monthly retainer",
        description: "Ongoing feature work, automation and support for your product or ERP.",
    },
    {
        title: "Consulting & audit",
        description: "Pressure-test an AI idea, a workflow or an existing system — get a written recommendation and plan.",
    },
];

export const contact = {
    headline: "Have a product idea or a workflow that eats your team's time?",
    sub: "Tell me what you're trying to do. I'll reply within 24 hours with questions, a rough approach, and whether I'm the right fit.",
    // TODO(Yoga): add a personal email and WhatsApp number (e.g. "62812xxxxxxx") — both cards stay hidden until set.
    email: "",
    whatsapp: "",
    whatsappLabel: "",
    linkedin: "https://www.linkedin.com/in/yoga-listianto-87153a208/",
    github: "https://github.com/YogaListianto19",
};
