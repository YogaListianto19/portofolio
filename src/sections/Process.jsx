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
                        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
                            {processSteps.map((step, i) => (
                                <li key={step.title}>
                                    <Reveal delay={i * 0.05}>
                                        <p className={`border-t border-ink pt-4 font-serif text-5xl leading-none dark:border-stone-100 ${toneAt(i).text}`}>
                                            {i + 1}
                                        </p>
                                        <h3 className="mt-4 text-xl">{step.title}</h3>
                                        <p className="muted mt-2 text-[15px] leading-relaxed">{step.description}</p>
                                        <p className="mt-4 text-sm leading-relaxed">
                                            <span className="font-semibold">Anda dapat: </span>
                                            <span className="muted">{step.output}</span>
                                        </p>
                                    </Reveal>
                                </li>
                            ))}
                        </ol>

                        <Reveal className="mt-20">
                            <h3 className="text-2xl sm:text-3xl">Bentuk kerja sama</h3>
                            <ul className="hairline mt-6 grid border-t md:grid-cols-3">
                                {engagementModels.map((m, i) => (
                                    <li key={m.title} className="hairline border-b py-6 md:border-b-0 md:pr-6 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-6">
                                        <p className="flex items-center gap-2.5 font-serif text-xl">
                                            <span aria-hidden="true" className={`h-2 w-2 shrink-0 ${toneAt(i + 1).bg}`} />
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
