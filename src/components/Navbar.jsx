import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Process", href: "#process" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 16);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
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
            <nav
                aria-label="Primary"
                className={`mx-auto max-w-content rounded-2xl border transition-colors duration-300 ${isScrolled || isOpen
                    ? "border-zinc-200 bg-white/85 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/85"
                    : "border-transparent bg-transparent"
                    }`}
            >
                <div className="flex h-14 items-center justify-between px-3 sm:px-4">
                    <a href="#home" className="flex items-center gap-2.5 rounded-lg" aria-label="Back to top">
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-zinc-900 font-heading text-sm font-bold text-white dark:bg-white dark:text-zinc-900">
                            YL
                        </span>
                        <span className="font-heading text-base font-bold tracking-tight text-zinc-900 dark:text-white">
                            Yoga Listianto
                        </span>
                    </a>

                    <div className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-1.5">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                            className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg text-zinc-600 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                        >
                            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                        <a href="#contact" className="btn-primary hidden !min-h-[40px] !px-4 !py-2 sm:inline-flex">
                            Hire me
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                            className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg text-zinc-700 hover:bg-zinc-100 md:hidden dark:text-zinc-300 dark:hover:bg-zinc-800"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden md:hidden"
                        >
                            <div className="space-y-1 border-t border-zinc-200 px-3 pb-3 pt-2 dark:border-zinc-800">
                                {[...navLinks, { name: "Contact", href: "#contact" }].map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block rounded-lg px-3 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
