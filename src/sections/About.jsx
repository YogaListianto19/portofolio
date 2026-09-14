import { useState } from "react";
import { aboutData, profile, sections } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { toneAt } from "../components/tones";

export default function About() {
    const [avatarFailed, setAvatarFailed] = useState(false);

    return (
        <section id="tentang" aria-labelledby="tentang-title" className="py-20 sm:py-28">
            <div className="container-page">
                <SectionHeader id="tentang-title" {...sections.about} />

                <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
                    <Reveal className="lg:col-span-3">
                        <figure>
                            {avatarFailed ? (
                                <div className="grid aspect-[4/5] w-full place-items-center rounded-3xl bg-brand-purple/10 font-display text-6xl font-semibold text-brand-purple">
                                    YL
                                </div>
                            ) : (
                                <img
                                    src={profile.avatar}
                                    alt={`Foto ${profile.name}`}
                                    width="460"
                                    height="575"
                                    loading="lazy"
                                    onError={() => setAvatarFailed(true)}
                                    className="aspect-[4/5] w-full rounded-3xl object-cover object-[30%_center] shadow-panel ring-1 ring-brand-purple/10"
                                />
                            )}
                            <figcaption className="label mt-3">
                                {profile.name} — {profile.location}
                            </figcaption>
                        </figure>

                        <dl className="panel mt-6 px-4 py-1 text-sm">
                            {aboutData.facts.map((f) => (
                                <div key={f.label} className="hairline flex justify-between gap-4 border-b py-3 last:border-b-0">
                                    <dt className="muted">{f.label}</dt>
                                    <dd className="text-right font-medium">{f.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>

                    <Reveal delay={0.05} className="lg:col-span-8 lg:col-start-5">
                        <div className="space-y-5 text-lg leading-relaxed text-stone-800 dark:text-stone-200">
                            {aboutData.paragraphs.map((p, i) => (
                                <p
                                    key={i}
                                    className={
                                        i === 0
                                            ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[4rem] first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-accent dark:first-letter:text-accent-bright"
                                            : ""
                                    }
                                >
                                    {p}
                                </p>
                            ))}
                        </div>

                        <blockquote className="panel my-12 p-6 sm:p-8">
                            <span aria-hidden="true" className="block h-1 w-10 rounded-full bg-gradient-to-r from-brand-purple to-brand-teal" />
                            <p className="mt-5 font-display text-2xl font-medium leading-snug tracking-[-0.02em] sm:text-[1.75rem]">
                                {aboutData.quote.text}
                            </p>
                            <footer className="label mt-4">— {aboutData.quote.cite}</footer>
                        </blockquote>

                        <h3 className="text-2xl">Yang bisa Anda harapkan</h3>
                        <ul className="hairline mt-4 grid border-t sm:grid-cols-2 sm:gap-x-8">
                            {aboutData.highlights.map((item, i) => (
                                <li key={item} className="hairline flex gap-3 border-b py-3 text-[15px] leading-relaxed">
                                    <span aria-hidden="true" className={`mt-2 h-2 w-2 shrink-0 rounded-full ${toneAt(i).bg}`} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
