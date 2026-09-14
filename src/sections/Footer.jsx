import { ArrowUp, ArrowUpRight } from "lucide-react";
import { contact, profile, sections } from "../data/portfolio";
import Reveal from "../components/Reveal";

// Contact block on Odoo purple, with the Odoo yellow as the single highlight.
export default function Footer() {
    const currentYear = new Date().getFullYear();

    const channels = [
        contact.email && { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
        contact.whatsapp && { label: "WhatsApp", value: contact.whatsappLabel, href: `https://wa.me/${contact.whatsapp}` },
        { label: "LinkedIn", value: "Yoga Listianto", href: contact.linkedin },
        { label: "GitHub", value: "YogaListianto19", href: contact.github },
    ].filter(Boolean);

    return (
        <footer id="kontak" aria-labelledby="kontak-title" className="mt-8 bg-brand-purple text-white dark:bg-[#2A1F28]">
            <div className="container-page py-20 sm:py-28">
                <Reveal className="relative grid gap-4 border-t border-white/30 pt-5 lg:grid-cols-12 lg:gap-10">
                    <span aria-hidden="true" className="absolute -top-[2px] left-0 h-[3px] w-14 bg-brand-yellow" />
                    <p className="text-[13px] font-medium text-white/80 lg:col-span-3">
                        <span className="mr-2 font-mono font-semibold text-white">{sections.contact.index}</span>
                        {sections.contact.label}
                    </p>
                    <div className="lg:col-span-9">
                        <h2 id="kontak-title" className="text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
                            {contact.headline} <em className="italic text-brand-yellow">{contact.emphasis}</em>
                        </h2>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{contact.sub}</p>

                        <ul className="mt-12 border-t border-white/30">
                            {channels.map((c) => {
                                const external = c.href.startsWith("http");
                                return (
                                    <li key={c.label} className="border-b border-white/30">
                                        <a
                                            href={c.href}
                                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                            className="group flex min-h-[64px] items-center gap-6 py-5"
                                        >
                                            <span className="w-24 shrink-0 text-sm text-white/80">{c.label}</span>
                                            <span className="min-w-0 flex-1 truncate font-serif text-2xl transition-colors duration-200 group-hover:text-brand-yellow sm:text-3xl">
                                                {c.value}
                                            </span>
                                            <ArrowUpRight className="h-6 w-6 shrink-0 text-white/70 transition-colors duration-200 group-hover:text-brand-yellow" />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </Reveal>

                <div className="mt-20 flex flex-col gap-4 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {currentYear} {profile.name} · {profile.location}
                    </p>
                    <p>Dirancang & dibangun sendiri — React, Tailwind, Framer Motion.</p>
                    <a href="#beranda" className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-white transition-colors duration-200 hover:text-brand-yellow">
                        Kembali ke atas
                        <ArrowUp className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
