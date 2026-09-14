import { processSteps, engagementModels } from "../data/portfolio";
import Reveal from "../components/Reveal";

export default function Process() {
    return (
        <section id="process" className="py-20 sm:py-24">
            <div className="container-page">
                <Reveal>
                    <p className="eyebrow">How I work</p>
                    <h2 className="section-title mt-3">Product thinking first, code second</h2>
                    <p className="section-lead">
                        You get a partner who asks "why" before "how" — and an AI-accelerated build process that keeps timelines short
                        without skipping review and testing.
                    </p>
                </Reveal>

                <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {processSteps.map((step, i) => (
                        <li key={step.title}>
                            <Reveal delay={i * 0.05} className="h-full">
                                <div className="card h-full p-6">
                                    <span className="font-mono text-sm font-medium text-brand-600 dark:text-brand-400">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="mt-3 text-lg font-bold text-zinc-900 dark:text-white">{step.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{step.description}</p>
                                    <p className="mt-4 border-t border-zinc-200 pt-4 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                                        <span className="font-semibold text-zinc-700 dark:text-zinc-300">You get: </span>
                                        {step.output}
                                    </p>
                                </div>
                            </Reveal>
                        </li>
                    ))}
                </ol>

                <Reveal className="mt-16">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Ways to work together</h3>
                    <div className="mt-6 grid gap-5 md:grid-cols-3">
                        {engagementModels.map((m) => (
                            <div key={m.title} className="rounded-2xl border border-dashed border-zinc-300 p-6 dark:border-zinc-700">
                                <p className="font-heading text-base font-bold text-zinc-900 dark:text-white">{m.title}</p>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{m.description}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
