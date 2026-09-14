import { Github, Linkedin, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { contact, profile } from "../data/portfolio";
import Reveal from "../components/Reveal";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const channels = [
        contact.email && { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
        contact.whatsapp && { label: "WhatsApp", value: contact.whatsappLabel, href: `https://wa.me/${contact.whatsapp}`, icon: MessageCircle },
        { label: "LinkedIn", value: "Yoga Listianto", href: contact.linkedin, icon: Linkedin },
        { label: "GitHub", value: "YogaListianto19", href: contact.github, icon: Github },
    ].filter(Boolean);

    return (
        <footer id="contact" className="pb-10 pt-20 sm:pt-24">
            <div className="container-page">
                <Reveal>
                    <div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-6 py-12 text-white sm:px-12 sm:py-16 dark:bg-zinc-900 dark:ring-1 dark:ring-zinc-800">
                        <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
                        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-end">
                            <div>
                                <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-400">Let's talk</p>
                                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{contact.headline}</h2>
                                <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-300">{contact.sub}</p>
                            </div>
                            <ul className="grid gap-3 sm:grid-cols-2">
                                {channels.map((c) => {
                                    const Icon = c.icon;
                                    const external = c.href.startsWith("http");
                                    return (
                                        <li key={c.label}>
                                            <a
                                                href={c.href}
                                                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                                className="group flex min-h-[44px] items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-800/60 p-4 transition-colors duration-200 hover:border-brand-400"
                                            >
                                                <Icon className="h-5 w-5 shrink-0 text-zinc-300" />
                                                <span className="min-w-0 flex-1">
                                                    <span className="block text-xs text-zinc-400">{c.label}</span>
                                                    <span className="block truncate text-sm font-medium text-white">{c.value}</span>
                                                </span>
                                                <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500 transition-colors duration-200 group-hover:text-brand-400" />
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </Reveal>

                <div className="mt-10 flex flex-col items-center justify-between gap-3 text-center text-sm text-zinc-500 sm:flex-row sm:text-left dark:text-zinc-400">
                    <p>© {currentYear} {profile.name}. {profile.location}.</p>
                    <p>Designed & built by me — React, Tailwind, Framer Motion.</p>
                </div>
            </div>
        </footer>
    );
}
