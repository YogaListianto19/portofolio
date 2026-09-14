import { heroReceipt as r } from "../data/portfolio";
import { TONES } from "./tones";

// One Odoo tone per system in the flow: AI (teal), ERP (purple), WhatsApp (green), done (pink).
const TAG_TONE = {
    ai: TONES.teal.text,
    erp: TONES.purple.text,
    wa: TONES.green.text,
    done: TONES.pink.text,
};

const Dashed = () => <div aria-hidden="true" className="my-4 border-t border-dashed border-ink/20 dark:border-white/15" />;

// The hero "nota": one illustrative run of the WhatsApp → LLM → ERP order agent, on a frosted panel.
// The panel stays mostly opaque (white/85) so the coloured tags keep AA contrast over the aurora.
export default function OrderReceipt() {
    return (
        <figure>
            <div className="rounded-2xl border border-white/80 bg-white/85 p-5 font-mono text-[12.5px] leading-relaxed text-stone-800 shadow-panel ring-1 ring-brand-purple/10 backdrop-blur-xl sm:p-6 dark:border-white/10 dark:bg-night-raised/80 dark:text-stone-200 dark:ring-white/5">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <p className="text-[12px] font-semibold uppercase tracking-[0.16em]">{r.title}</p>
                        <p className="mt-1 text-[11px] text-stone-600 dark:text-stone-400">{r.subtitle}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-brand-green/15 px-2.5 py-1 font-sans text-[11px] font-semibold text-[#08664F] dark:text-brand-green-light">
                        {r.status}
                    </span>
                </div>

                <Dashed />

                <ol className="space-y-2">
                    {r.log.map((line, i) => (
                        <li key={i} className="flex gap-3">
                            <span className={`w-9 shrink-0 font-semibold ${TAG_TONE[line.tag] ?? "text-stone-600 dark:text-stone-400"}`}>
                                {line.tag}
                            </span>
                            <span>{line.text}</span>
                        </li>
                    ))}
                </ol>

                <Dashed />

                <dl className="space-y-1">
                    {r.parsed.map((row) => (
                        <div key={row.k} className="flex justify-between gap-4">
                            <dt className="text-stone-600 dark:text-stone-400">{row.k}</dt>
                            <dd className="text-right font-semibold">{row.v}</dd>
                        </div>
                    ))}
                </dl>
            </div>
            <figcaption className="muted mt-4 text-sm leading-snug">{r.caption}</figcaption>
        </figure>
    );
}
