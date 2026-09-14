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

    const solid = isScrolled || isOpen;

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${solid
                ? "border-ink/15 bg-paper/95 backdrop-blur-sm dark:border-stone-100/15 dark:bg-night/95"
                : "border-transparent"
                }`}
        >
            <nav aria-label="Navigasi utama" className="container-page flex h-16 items-center justify-between gap-6">
                <a href="#beranda" className="font-serif text-xl leading-none">
                    Yoga Listianto
                </a>

                <ul className="hidden items-center gap-6 lg:flex">
                    {navLinks.map((link, i) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="group inline-flex items-baseline gap-1.5 py-2 text-sm font-medium text-stone-700 transition-colors duration-200 hover:text-ink dark:text-stone-300 dark:hover:text-white"
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
                        className="grid h-10 w-10 cursor-pointer place-items-center rounded-full text-stone-700 transition-colors duration-200 hover:bg-ink/5 hover:text-ink dark:text-stone-300 dark:hover:bg-white/10 dark:hover:text-white"
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
                        className="grid h-10 w-10 cursor-pointer place-items-center rounded-full text-ink hover:bg-ink/5 lg:hidden dark:text-stone-100 dark:hover:bg-white/10"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="border-t border-ink/15 lg:hidden dark:border-stone-100/15">
                    <ul className="container-page py-3">
                        {[...navLinks, { name: "Kontak", href: "#kontak" }].map((link, i) => (
                            <li key={link.href} className="border-b border-ink/10 last:border-0 dark:border-stone-100/10">
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-baseline gap-3 py-3 font-serif text-2xl"
                                >
                                    <span className={`font-mono text-xs font-semibold ${toneAt(i).text}`}>{pad(i + 1)}</span>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
