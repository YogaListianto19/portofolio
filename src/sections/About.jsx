import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { aboutData, profile } from "../data/portfolio";
import Reveal from "../components/Reveal";

export default function About() {
    const [avatarFailed, setAvatarFailed] = useState(false);

    return (
        <section id="about" className="border-y border-zinc-200 bg-white py-20 sm:py-24 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="container-page grid gap-12 lg:grid-cols-12">
                <Reveal className="lg:col-span-4">
                    <div className="card p-6">
                        <div className="flex items-center gap-4">
                            {avatarFailed ? (
                                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-zinc-900 font-heading text-xl font-bold text-white dark:bg-white dark:text-zinc-900">
                                    YL
                                </div>
                            ) : (
                                <img
                                    src={profile.avatar}
                                    alt={`Portrait of ${profile.name}`}
                                    width="64"
                                    height="64"
                                    loading="lazy"
                                    onError={() => setAvatarFailed(true)}
                                    className="h-16 w-16 rounded-2xl object-cover"
                                />
                            )}
                            <div>
                                <p className="font-heading text-lg font-bold text-zinc-900 dark:text-white">{profile.name}</p>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">{profile.shortRole}</p>
                            </div>
                        </div>
                        <dl className="mt-6 space-y-3 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800">
                            {aboutData.facts.map((f) => (
                                <div key={f.label} className="flex justify-between gap-4">
                                    <dt className="text-zinc-500 dark:text-zinc-400">{f.label}</dt>
                                    <dd className="text-right font-medium text-zinc-900 dark:text-zinc-100">{f.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </Reveal>

                <Reveal delay={0.05} className="lg:col-span-8">
                    <p className="eyebrow">About</p>
                    <h2 className="section-title mt-3">{aboutData.title}</h2>
                    <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
                        {aboutData.paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                        {aboutData.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-400" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}
