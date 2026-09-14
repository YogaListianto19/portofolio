import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { toneAt } from "./tones";

const clock = new Intl.DateTimeFormat("id-ID", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Jakarta" });
const nowInBandung = () => clock.format(new Date());
const pad = (n) => String(n).padStart(2, "0");

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));
    const [time, setTime] = useState(nowInBandung);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const id = setInterval(() => setTime(nowInBandung()), 20000);
        return () => clearInterval(id);
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        try {
            localStorage.setItem("theme", next ? "dark" : "light");
        } catch {
            // storage unavailable (private mode) — theme still applies for this visit
        }
    };

    return (
        <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-4">
            {/* Always frosted, so the nav stays readable over the hero aurora */}
            <div
                className={`mx-auto max-w-content rounded-2xl border border-brand-purple/10 bg-white/75 backdrop-blur-xl transition-shadow duration-300 dark:border-white/10 dark:bg-night/75 ${isScrolled || isOpen ? "shadow-panel" : ""
                    }`}
            >
                <nav aria-label="Navigasi utama" className="flex h-14 items-center justify-between gap-4 px-3 sm:px-4">
                    <a href="#beranda" className="flex items-center gap-2.5 rounded-lg font-display text-[17px] font-semibold tracking-[-0.02em]">
                        <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-xl bg-brand-purple text-sm font-bold text-white shadow-glow">
                            Y
                        </span>
                        Yoga Listianto
                    </a>

                    <ul className="hidden items-center gap-5 lg:flex">
                        {navLinks.map((link, i) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="inline-flex items-baseline gap-1.5 py-2 text-sm font-medium text-stone-700 transition-colors duration-200 hover:text-ink dark:text-stone-300 dark:hover:text-white"
                                >
                                    <span className={`font-mono text-[10px] font-semibold ${toneAt(i).text}`}>{pad(i + 1)}</span>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-1 sm:gap-2">
                        <span className="hidden text-[13px] tabular-nums text-stone-600 xl:inline dark:text-stone-400">
                            {profile.city}, {time} WIB
                        </span>
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={isDark ? "Ganti ke tema terang" : "Ganti ke tema gelap"}
                            className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl text-stone-700 transition-colors duration-200 hover:bg-brand-purple/10 hover:text-ink dark:text-stone-300 dark:hover:bg-white/10 dark:hover:text-white"
                        >
                            {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
                        </button>
                        <a href="#kontak" className="btn-primary hidden !min-h-[40px] !px-4 !text-sm sm:inline-flex">
                            Hubungi saya
                        </a>
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
                            aria-expanded={isOpen}
                            className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl text-ink hover:bg-brand-purple/10 lg:hidden dark:text-stone-100 dark:hover:bg-white/10"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </nav>

                {isOpen && (
                    <div className="border-t border-brand-purple/10 lg:hidden dark:border-white/10">
                        <ul className="px-3 py-2">
                            {[...navLinks, { name: "Kontak", href: "#kontak" }].map((link, i) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-baseline gap-3 rounded-xl px-2 py-3 font-display text-xl font-semibold tracking-[-0.02em] hover:bg-brand-purple/5 dark:hover:bg-white/5"
                                    >
                                        <span className={`font-mono text-xs font-semibold ${toneAt(i).text}`}>{pad(i + 1)}</span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
