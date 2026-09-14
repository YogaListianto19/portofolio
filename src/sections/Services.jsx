import { services, sections } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { toneAt } from "../components/tones";

export default function Services() {
    return (
        <section id="layanan" aria-labelledby="layanan-title" className="py-20 sm:py-28">
            <div className="container-page">
                <SectionHeader id="layanan-title" {...sections.services} />

                <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-10">
                    <ol className="grid gap-4 md:grid-cols-2 lg:col-span-9 lg:col-start-4">
                        {services.map((s, i) => {
                            const tone = toneAt(i);
                            return (
                                <li key={s.title}>
                                    <Reveal delay={(i % 2) * 0.05} className="h-full">
                                        <article className="panel h-full p-6 transition-shadow duration-300 hover:shadow-glow sm:p-7">
                                            <div className="flex items-center gap-3">
                                                <span aria-hidden="true" className={`h-1 w-8 rounded-full ${tone.bg}`} />
                                                <span className={`font-mono text-xs font-semibold ${tone.text}`}>{String(i + 1).padStart(2, "0")}</span>
                                            </div>
                                            <h3 className="mt-5 text-xl leading-tight sm:text-2xl">{s.title}</h3>
                                            <p className="muted mt-3 leading-relaxed">{s.description}</p>
                                            <p className="mt-5 text-sm leading-relaxed">
                                                <span className="font-semibold">Termasuk: </span>
                                                <span className="muted">{s.deliverables.join(" · ")}</span>
                                            </p>
                                        </article>
                                    </Reveal>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
