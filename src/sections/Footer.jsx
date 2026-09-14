import { ArrowUp, ArrowUpRight } from "lucide-react";
import { contact, profile, sections } from "../data/portfolio";
import Reveal from "../components/Reveal";

// Contact block on an Odoo purple gradient with faint aurora corners; Odoo yellow as the highlight.
export default function Footer() {
    const currentYear = new Date().getFullYear();

    const channels = [
        contact.email && { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
        contact.whatsapp && {
            label: "WhatsApp",
            value: contact.whatsappLabel,
            // Official click-to-chat link; opens the WhatsApp app (or WhatsApp Web) with the greeting pre-filled.
            href: `https://wa.me/${contact.whatsapp}${contact.whatsappText ? `?text=${encodeURIComponent(contact.whatsappText)}` : ""}`,
        },
        { label: "LinkedIn", value: "Yoga Listianto", href: contact.linkedin },
        { label: "GitHub", value: "YogaListianto19", href: contact.github },
    ].filter(Boolean);

    return (
        <footer
            id="kontak"
            aria-labelledby="kontak-title"
            className="relative isolate mt-8 overflow-hidden bg-gradient-to-br from-brand-purple to-brand-purple-deep text-white dark:from-[#3A2836] dark:to-night-raised"
        >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="aurora-blob right-[-12%] top-[-30%] h-[26rem] w-[26rem] bg-glow-teal !opacity-30" />
                <div className="aurora-blob bottom-[-40%] right-[20%] h-[22rem] w-[22rem] bg-glow-pink !opacity-20 [animation-delay:-10s]" />
            </div>

            <div className="container-page py-20 sm:py-28">
                <Reveal className="relative grid gap-4 border-t border-white/30 pt-5 lg:grid-cols-12 lg:gap-10">
                    <span aria-hidden="true" className="absolute -top-[2px] left-0 h-[3px] w-14 rounded-full bg-brand-yellow" />
                    <p className="text-[13px] font-medium text-white/90 lg:col-span-3">
                        <span className="mr-2 font-mono font-semibold text-white">{sections.contact.index}</span>
                        {sections.contact.label}
                    </p>
                    <div className="lg:col-span-9">
                        <h2 id="kontak-title" className="text-[2.2rem] leading-[1.06] tracking-[-0.04em] sm:text-6xl lg:text-[4.2rem]">
                            {contact.headline} <span className="text-brand-yellow-light">{contact.emphasis}</span>
                        </h2>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">{contact.sub}</p>

                        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
                            {channels.map((c) => {
                                const external = c.href.startsWith("http");
                                return (
                                    <li key={c.label}>
                                        <a
                                            href={c.href}
                                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                            className="group flex min-h-[72px] items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md transition-colors duration-200 hover:border-brand-yellow-light/70 hover:bg-white/15"
                                        >
                                            <span className="min-w-0 flex-1">
                                                <span className="block text-sm text-white/90">{c.label}</span>
                                                <span className="mt-0.5 block truncate font-display text-xl font-semibold tracking-[-0.02em]">{c.value}</span>
                                            </span>
                                            <ArrowUpRight className="h-5 w-5 shrink-0 text-white/80 transition-colors duration-200 group-hover:text-brand-yellow-light" />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </Reveal>

                <div className="mt-20 flex flex-col gap-4 text-sm text-white/90 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {currentYear} {profile.name} · {profile.location}
                    </p>
                    <p>Dirancang & dibangun sendiri — React, Tailwind, Framer Motion.</p>
                    <a href="#beranda" className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-white transition-colors duration-200 hover:text-brand-yellow-light">
                        Kembali ke atas
                        <ArrowUp className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
