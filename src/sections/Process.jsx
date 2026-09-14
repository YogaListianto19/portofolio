import { processSteps, engagementModels, sections } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { toneAt } from "../components/tones";

export default function Process() {
    return (
        <section id="cara-kerja" aria-labelledby="cara-kerja-title" className="py-20 sm:py-28">
            <div className="container-page">
                <SectionHeader id="cara-kerja-title" {...sections.process} />

                <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-9 lg:col-start-4">
                        <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                            {processSteps.map((step, i) => (
                                <li key={step.title}>
                                    <Reveal delay={i * 0.05} className="h-full">
                                        <div className="panel h-full p-6">
                                            <p className={`font-display text-4xl font-semibold leading-none tracking-[-0.04em] ${toneAt(i).text}`}>
                                                {String(i + 1).padStart(2, "0")}
                                            </p>
                                            <h3 className="mt-5 text-lg">{step.title}</h3>
                                            <p className="muted mt-2 text-[15px] leading-relaxed">{step.description}</p>
                                            <p className="mt-4 text-sm leading-relaxed">
                                                <span className="font-semibold">Anda dapat: </span>
                                                <span className="muted">{step.output}</span>
                                            </p>
                                        </div>
                                    </Reveal>
                                </li>
                            ))}
                        </ol>

                        <Reveal className="mt-16">
                            <h3 className="text-2xl sm:text-3xl">Bentuk kerja sama</h3>
                            <ul className="mt-6 grid gap-4 md:grid-cols-3">
                                {engagementModels.map((m, i) => (
                                    <li key={m.title} className="rounded-2xl border border-dashed border-brand-purple/30 p-6 dark:border-white/15">
                                        <p className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-[-0.02em]">
                                            <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${toneAt(i + 1).bg}`} />
                                            {m.title}
                                        </p>
                                        <p className="muted mt-2 text-[15px] leading-relaxed">{m.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
