import { skillGroups, sections } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { toneAt } from "../components/tones";

export default function Skills() {
    return (
        <section id="keahlian" aria-labelledby="keahlian-title" className="py-20 sm:py-28">
            <div className="container-page">
                <SectionHeader id="keahlian-title" {...sections.skills} />

                <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-10">
                    <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-9 lg:col-start-4 xl:grid-cols-3">
                        {skillGroups.map((g, i) => (
                            <Reveal key={g.title} delay={(i % 3) * 0.04}>
                                <h3 className={`border-t-[3px] pt-4 text-xl ${toneAt(i).border}`}>{g.title}</h3>
                                <ul className="muted mt-3 space-y-1.5 text-[15px]">
                                    {g.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
