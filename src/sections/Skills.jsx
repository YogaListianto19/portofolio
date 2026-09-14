import { skillGroups } from "../data/portfolio";
import Reveal from "../components/Reveal";

export default function Skills() {
    return (
        <section id="skills" className="py-20 sm:py-24">
            <div className="container-page">
                <Reveal>
                    <p className="eyebrow">Toolbox</p>
                    <h2 className="section-title mt-3">Skills I use to ship</h2>
                    <p className="section-lead">
                        Grouped by what they help me deliver — not by percentage bars.
                    </p>
                </Reveal>

                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((g, i) => {
                        const Icon = g.icon;
                        return (
                            <Reveal key={g.title} delay={i * 0.04}>
                                <div className="card h-full p-6">
                                    <div className="flex items-center gap-3">
                                        <Icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                                        <h3 className="text-base font-bold text-zinc-900 dark:text-white">{g.title}</h3>
                                    </div>
                                    <ul className="mt-4 flex flex-wrap gap-1.5">
                                        {g.items.map((item) => (
                                            <li key={item} className="chip !text-xs">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
