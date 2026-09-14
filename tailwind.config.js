/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Monochrome zinc base + a single blue accent (ui-ux-pro-max: "Monochrome + blue accent")
                brand: {
                    50: "#EFF6FF",
                    100: "#DBEAFE",
                    200: "#BFDBFE",
                    300: "#93C5FD",
                    400: "#60A5FA",
                    500: "#3B82F6",
                    600: "#2563EB",
                    700: "#1D4ED8",
                },
            },
            fontFamily: {
                heading: ["Archivo", "ui-sans-serif", "system-ui", "sans-serif"],
                sans: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"],
                mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
            },
            maxWidth: {
                content: "72rem",
            },
            keyframes: {
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(12px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                pulseDot: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: ".35" },
                },
            },
            animation: {
                "fade-up": "fade-up .5s ease-out both",
                "pulse-dot": "pulseDot 2s ease-in-out infinite",
            },
        },
    },
    plugins: [],
}
