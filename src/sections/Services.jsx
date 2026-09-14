import { services } from "../data/portfolio";
import Reveal from "../components/Reveal";

export default function Services() {
    return (
        <section id="services" className="py-20 sm:py-24">
            <div className="container-page">
                <Reveal>
                    <p className="eyebrow">What I can build for you</p>
                    <h2 className="section-title mt-3">From idea to a product people actually use</h2>
                    <p className="section-lead">
                        I take ownership of the whole slice — scoping the problem, designing the flow, building frontend and backend,
                        wiring in AI where it pays off, and shipping it to production.
                    </p>
                </Reveal>

                <div className="mt-12 grid gap-5 md:grid-cols-2">
                    {services.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <Reveal key={s.title} delay={i * 0.05}>
                                <article className="card h-full p-6 transition-colors duration-200 hover:border-zinc-400 sm:p-7 dark:hover:border-zinc-600">
                                    <div className="flex items-start gap-4">
                                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{s.title}</h3>
                                            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.description}</p>
                                        </div>
                                    </div>
                                    <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                                        {s.deliverables.map((d) => (
                                            <li key={d} className="chip">{d}</li>
                                        ))}
                                    </ul>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
