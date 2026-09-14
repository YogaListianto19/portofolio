// Odoo-inspired accent tones. Every entry is a literal Tailwind class string so the JIT keeps it.
export const TONES = {
    purple: {
        text: "text-brand-purple dark:text-brand-purple-light",
        bg: "bg-brand-purple dark:bg-brand-purple-light",
        tint: "bg-brand-purple/[0.08] dark:bg-brand-purple-light/10",
        border: "border-brand-purple dark:border-brand-purple-light",
        decoration: "decoration-brand-purple dark:decoration-brand-purple-light",
        hoverText: "group-hover:text-brand-purple dark:group-hover:text-brand-purple-light",
        fill: "fill-brand-purple dark:fill-brand-purple-light",
        fillSoft: "fill-brand-purple/15 dark:fill-brand-purple-light/20",
        stroke: "stroke-brand-purple dark:stroke-brand-purple-light",
    },
    teal: {
        text: "text-brand-teal dark:text-brand-teal-light",
        bg: "bg-brand-teal dark:bg-brand-teal-light",
        tint: "bg-brand-teal/[0.08] dark:bg-brand-teal-light/10",
        border: "border-brand-teal dark:border-brand-teal-light",
        decoration: "decoration-brand-teal dark:decoration-brand-teal-light",
        hoverText: "group-hover:text-brand-teal dark:group-hover:text-brand-teal-light",
        fill: "fill-brand-teal dark:fill-brand-teal-light",
        fillSoft: "fill-brand-teal/15 dark:fill-brand-teal-light/20",
        stroke: "stroke-brand-teal dark:stroke-brand-teal-light",
    },
    pink: {
        text: "text-brand-pink-text dark:text-brand-pink-light",
        bg: "bg-brand-pink",
        tint: "bg-brand-pink/10",
        border: "border-brand-pink",
        decoration: "decoration-brand-pink",
        hoverText: "group-hover:text-brand-pink-text dark:group-hover:text-brand-pink-light",
        fill: "fill-brand-pink",
        fillSoft: "fill-brand-pink/20",
        stroke: "stroke-brand-pink",
    },
    green: {
        text: "text-brand-green-text dark:text-brand-green-light",
        bg: "bg-brand-green",
        tint: "bg-brand-green/10",
        border: "border-brand-green",
        decoration: "decoration-brand-green",
        hoverText: "group-hover:text-brand-green-text dark:group-hover:text-brand-green-light",
        fill: "fill-brand-green",
        fillSoft: "fill-brand-green/20",
        stroke: "stroke-brand-green",
    },
    yellow: {
        text: "text-brand-yellow-text dark:text-brand-yellow-light",
        bg: "bg-brand-yellow",
        tint: "bg-brand-yellow/15",
        border: "border-brand-yellow",
        decoration: "decoration-brand-yellow",
        hoverText: "group-hover:text-brand-yellow-text dark:group-hover:text-brand-yellow-light",
        fill: "fill-brand-yellow",
        fillSoft: "fill-brand-yellow/25",
        stroke: "stroke-brand-yellow",
    },
};

export const CYCLE = ["purple", "teal", "pink", "green", "yellow"];

// Tone for the n-th item of any list (sections, stats, skill groups...), cycling through the palette.
export const toneAt = (i) => TONES[CYCLE[((i % CYCLE.length) + CYCLE.length) % CYCLE.length]];

export const CATEGORY_TONE = {
    "AI & Otomasi": "teal",
    "Aplikasi & SaaS": "pink",
    "ERP & Integrasi": "purple",
};

export const categoryTone = (category) => TONES[CATEGORY_TONE[category] ?? "purple"];
