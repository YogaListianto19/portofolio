import { experience, sections } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { toneAt } from "../components/tones";

export default function Experience() {
    return (
        <section id="pengalaman" aria-labelledby="pengalaman-title" className="py-20 sm:py-28">
            <div className="container-page">
                <SectionHeader id="pengalaman-title" {...sections.experience} />

                <ol className="mt-12">
                    {experience.map((exp, i) => (
                        <li key={exp.company + exp.period} className="hairline grid gap-4 border-t py-10 first:border-t-0 first:pt-2 lg:grid-cols-12 lg:gap-10">
                            <div className="lg:col-span-3">
                                <p className="flex items-center gap-2 text-sm font-semibold tabular-nums">
                                    <span aria-hidden="true" className={`h-2 w-2 shrink-0 ${toneAt(i).bg}`} />
                                    {exp.period}
                                </p>
                                <p className="muted mt-1 text-sm">{exp.company}</p>
                            </div>
                            <Reveal className="lg:col-span-9">
                                <h3 className="text-2xl leading-tight sm:text-3xl">{exp.role}</h3>
                                <ul className="mt-5 max-w-3xl space-y-3">
                                    {exp.points.map((pt) => (
                                        <li key={pt} className="flex gap-3 text-[16px] leading-relaxed text-stone-700 dark:text-stone-300">
                                            <span aria-hidden="true" className="mt-[13px] h-px w-4 shrink-0 bg-ink/50 dark:bg-stone-100/50" />
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                                {exp.tags?.length > 0 && <p className="muted mt-5 text-sm">{exp.tags.join(" · ")}</p>}
                            </Reveal>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
