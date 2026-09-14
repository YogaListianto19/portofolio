import Reveal from "./Reveal";
import { toneAt } from "./tones";

// Swiss-style section opener: numbered label on the left (3 cols), serif title on the right (9 cols).
// Each section gets its own Odoo tone (by index) on the number and a short bar over the top rule.
export default function SectionHeader({ id, index, label, title, emphasis, lead }) {
    const tone = toneAt(Number(index) - 1);

    return (
        <Reveal className="relative grid gap-4 border-t border-ink pt-5 lg:grid-cols-12 lg:gap-10 dark:border-stone-100">
            <span aria-hidden="true" className={`absolute -top-[2px] left-0 h-[3px] w-14 ${tone.bg}`} />
            <p className="label lg:col-span-3">
                <span className={`mr-2 font-mono font-semibold ${tone.text}`}>{index}</span>
                {label}
            </p>
            <div className="lg:col-span-9">
                <h2 id={id} className="text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
                    {title}
                    {emphasis && (
                        <>
                            {" "}
                            <em className="italic">{emphasis}</em>
                        </>
                    )}
                </h2>
                {lead && <p className="muted mt-5 max-w-2xl text-lg leading-relaxed">{lead}</p>}
            </div>
        </Reveal>
    );
}
