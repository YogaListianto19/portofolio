import { ArrowRight } from "lucide-react";
import { odooFlows, odooPoints, odooClosing, sections } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { TONES, toneAt } from "../components/tones";

// "Why Odoo", in a business owner's language: Odoo as a control tool, not just a place to record things.
export default function OdooExplained() {
    return (
        <section id="odoo" aria-labelledby="odoo-title" className="py-20 sm:py-28">
            <div className="container-page">
                <SectionHeader id="odoo-title" {...sections.odoo} />

                <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-9 lg:col-start-4">
                        <Reveal>
                            <div className="panel p-6 sm:p-7">
                                <h3 className="text-lg">Satu alur yang saling terhubung</h3>
                                <dl className="mt-5 space-y-5">
                                    {odooFlows.map((flow) => {
                                        const tone = TONES[flow.tone];
                                        return (
                                            <div key={flow.label} className="grid gap-2 sm:grid-cols-[7.5rem_1fr] sm:items-center">
                                                <dt className={`flex items-center gap-2 text-sm font-semibold ${tone.text}`}>
                                                    <span aria-hidden="true" className={`h-2 w-2 rounded-full ${tone.bg}`} />
                                                    {flow.label}
                                                </dt>
                                                <dd>
                                                    <ol className="flex flex-wrap items-center gap-2">
                                                        {flow.steps.map((step, i) => (
                                                            <li key={step} className="flex items-center gap-2">
                                                                {i > 0 && <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-stone-500" />}
                                                                <span className="rounded-full border border-brand-purple/15 bg-white px-3 py-1.5 text-sm font-medium dark:border-white/15 dark:bg-white/5">
                                                                    {step}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </dd>
                                            </div>
                                        );
                                    })}
                                </dl>
                            </div>
                        </Reveal>

                        <ol className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                            {odooPoints.map((point, i) => {
                                const tone = toneAt(i);
                                return (
                                    <li key={point.title}>
                                        <Reveal delay={(i % 3) * 0.04} className="h-full">
                                            <article className="panel h-full p-6">
                                                <div className="flex items-center gap-3">
                                                    <span aria-hidden="true" className={`h-1 w-8 rounded-full ${tone.bg}`} />
                                                    <span className={`font-mono text-xs font-semibold ${tone.text}`}>{String(i + 1).padStart(2, "0")}</span>
                                                </div>
                                                <h3 className="mt-4 text-lg leading-snug">{point.title}</h3>
                                                <p className="muted mt-2 text-[15px] leading-relaxed">{point.description}</p>
                                            </article>
                                        </Reveal>
                                    </li>
                                );
                            })}
                        </ol>

                        <Reveal className="mt-10">
                            <p className="max-w-2xl border-l-[3px] border-brand-teal pl-5 font-display text-xl font-medium leading-snug tracking-[-0.02em] dark:border-brand-teal-light">
                                {odooClosing}
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
