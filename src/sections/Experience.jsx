import { experience } from "../data/portfolio";
import Reveal from "../components/Reveal";

export default function Experience() {
    return (
        <section id="experience" className="border-y border-zinc-200 bg-white py-20 sm:py-24 dark:border-zinc-800 dark:bg-zinc-900/40">
            <div className="container-page">
                <Reveal>
                    <p className="eyebrow">Experience</p>
                    <h2 className="section-title mt-3">Where I've been shipping</h2>
                </Reveal>

                <ol className="relative mt-12 space-y-10 border-l border-zinc-200 pl-6 sm:pl-8 dark:border-zinc-800">
                    {experience.map((exp, i) => (
                        <li key={exp.company + exp.period} className="relative">
                            <span
                                aria-hidden="true"
                                className={`absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white sm:-left-[39px] dark:border-zinc-950 ${i === 0 ? "bg-brand-600" : "bg-zinc-400 dark:bg-zinc-600"}`}
                            />
                            <Reveal>
                                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{exp.period}</p>
                                <h3 className="mt-1 text-xl font-bold text-zinc-900 dark:text-white">{exp.role}</h3>
                                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{exp.company}</p>
                                <ul className="mt-4 max-w-3xl space-y-2">
                                    {exp.points.map((pt) => (
                                        <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                                {exp.tags?.length > 0 && (
                                    <ul className="mt-4 flex flex-wrap gap-1.5">
                                        {exp.tags.map((t) => (
                                            <li key={t} className="chip">{t}</li>
                                        ))}
                                    </ul>
                                )}
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
