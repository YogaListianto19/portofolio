/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            // Odoo-inspired palette: aubergine purple as the primary, plus Odoo's
            // teal / pink / green / yellow as small accents on a near-white page.
            colors: {
                paper: { DEFAULT: "#FCFBFC", deep: "#F3EEF2" },
                ink: { DEFAULT: "#1F1A1E", soft: "#2B2529" },
                night: { DEFAULT: "#17141A", raised: "#221E25" },
                accent: { DEFAULT: "#714B67", bright: "#D1A6C6" },
                brand: {
                    purple: { DEFAULT: "#714B67", light: "#D1A6C6" },
                    teal: { DEFAULT: "#017E84", light: "#4FD1D5" },
                    pink: { DEFAULT: "#E46E78", text: "#B8405A", light: "#F29AA2" },
                    green: { DEFAULT: "#21B799", text: "#0B7F62", light: "#5FD8B8" },
                    yellow: { DEFAULT: "#FBB130", text: "#8F5B00", light: "#FBC45E" },
                },
            },
            fontFamily: {
                serif: ["'Libre Bodoni'", "Georgia", "'Times New Roman'", "serif"],
                sans: ["'Public Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
                mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
            },
            maxWidth: {
                content: "76rem",
            },
        },
    },
    plugins: [],
}
