import Reveal from "./Reveal";
import { toneAt } from "./tones";

// Section opener: numbered label on the left (3 cols), title on the right (9 cols).
// Each section gets its own Odoo tone (by index) on the number and a short bar over the top rule.
export default function SectionHeader({ id, index, label, title, emphasis, lead }) {
    const tone = toneAt(Number(index) - 1);

    return (
        <Reveal className="hairline relative grid gap-4 border-t pt-5 lg:grid-cols-12 lg:gap-10">
            <span aria-hidden="true" className={`absolute -top-[2px] left-0 h-[3px] w-14 rounded-full ${tone.bg}`} />
            <p className="label lg:col-span-3">
                <span className={`mr-2 font-mono font-semibold ${tone.text}`}>{index}</span>
                {label}
            </p>
            <div className="lg:col-span-9">
                <h2 id={id} className="text-[2.1rem] leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[3.25rem]">
                    {title}
                    {emphasis && (
                        <>
                            {" "}
                            <span className="text-accent dark:text-accent-bright">{emphasis}</span>
                        </>
                    )}
                </h2>
                {lead && <p className="muted mt-5 max-w-2xl text-lg leading-relaxed">{lead}</p>}
            </div>
        </Reveal>
    );
}
