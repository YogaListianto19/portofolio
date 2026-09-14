/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            // "Spatial light": classic Odoo purple (#875A7B) on a lavender-white page,
            // Odoo teal / pink / green / yellow as small accents, soft aurora glows.
            colors: {
                paper: { DEFAULT: "#FBF9FC", deep: "#F2EDF5" },
                ink: { DEFAULT: "#1D1724", soft: "#2A2232" },
                night: { DEFAULT: "#130F18", raised: "#1E1826" },
                accent: { DEFAULT: "#875A7B", bright: "#D6A9CB" },
                brand: {
                    purple: { DEFAULT: "#875A7B", light: "#D6A9CB", deep: "#5E3F56" },
                    violet: { DEFAULT: "#7B4FC0", light: "#B99BF0" },
                    teal: { DEFAULT: "#017E84", light: "#4FD1D5" },
                    pink: { DEFAULT: "#E46E78", text: "#B8405A", light: "#F29AA2" },
                    green: { DEFAULT: "#21B799", text: "#0B7F62", light: "#5FD8B8" },
                    yellow: { DEFAULT: "#FBB130", text: "#8F5B00", light: "#FBC45E" },
                },
                glow: { purple: "#C39BE3", teal: "#7FDCD8", pink: "#F5B3CF" },
            },
            fontFamily: {
                display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
                sans: ["'Public Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
                mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
            },
            maxWidth: {
                content: "76rem",
            },
            boxShadow: {
                panel: "0 1px 2px rgba(29,23,36,0.04), 0 14px 36px -14px rgba(135,90,123,0.22)",
                glow: "0 10px 30px -10px rgba(135,90,123,0.6)",
                "glow-teal": "0 10px 30px -10px rgba(1,126,132,0.55)",
            },
            keyframes: {
                drift: {
                    "0%": { transform: "translate3d(0, 0, 0) scale(1)" },
                    "100%": { transform: "translate3d(5%, 7%, 0) scale(1.08)" },
                },
            },
            animation: {
                drift: "drift 22s ease-in-out infinite alternate",
            },
        },
    },
    plugins: [],
}
