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
                                <div className="grid aspect-[4/5] w-full place-items-center bg-paper-deep font-serif text-6xl dark:bg-night-raised">
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
                                    className="aspect-[4/5] w-full object-cover object-[30%_center] grayscale"
                                />
                            )}
                            <figcaption className="label mt-3">
                                {profile.name} — {profile.location}
                            </figcaption>
                        </figure>

                        <dl className="hairline mt-8 border-t text-sm">
                            {aboutData.facts.map((f) => (
                                <div key={f.label} className="hairline flex justify-between gap-4 border-b py-3">
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
                                            ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-[4.4rem] first-letter:leading-[0.8] first-letter:text-accent dark:first-letter:text-accent-bright"
                                            : ""
                                    }
                                >
                                    {p}
                                </p>
                            ))}
                        </div>

                        <blockquote className="my-12 border-l-[3px] border-brand-teal pl-6 dark:border-brand-teal-light">
                            <p className="font-serif text-2xl italic leading-snug sm:text-3xl">{aboutData.quote.text}</p>
                            <footer className="label mt-3">— {aboutData.quote.cite}</footer>
                        </blockquote>

                        <h3 className="text-2xl">Yang bisa Anda harapkan</h3>
                        <ul className="hairline mt-4 grid border-t sm:grid-cols-2 sm:gap-x-8">
                            {aboutData.highlights.map((item, i) => (
                                <li key={item} className="hairline flex gap-3 border-b py-3 text-[15px] leading-relaxed">
                                    <span aria-hidden="true" className={`mt-2 h-2 w-2 shrink-0 ${toneAt(i).bg}`} />
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
