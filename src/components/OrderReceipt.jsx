import { heroReceipt as r } from "../data/portfolio";
import { TONES } from "./tones";

// One Odoo tone per system in the flow: AI (teal), ERP (purple), WhatsApp (green), done (pink).
const TAG_TONE = {
    ai: TONES.teal.text,
    erp: TONES.purple.text,
    wa: TONES.green.text,
    done: TONES.pink.text,
};

const Dashed = () => <div aria-hidden="true" className="my-4 border-t border-dashed border-stone-400 dark:border-stone-600" />;

// The hero "nota": one illustrative run of the WhatsApp → LLM → ERP order agent, printed as a receipt.
export default function OrderReceipt() {
    return (
        <figure>
            <div className="drop-shadow-[0_14px_22px_rgba(22,21,18,0.12)] dark:drop-shadow-none">
                <div className="receipt bg-white px-5 pb-10 pt-6 font-mono text-[12.5px] leading-relaxed text-stone-800 sm:px-6 dark:bg-night-raised dark:text-stone-200">
                    <div className="text-center">
                        <p className="text-[13px] font-medium uppercase tracking-[0.2em]">{r.title}</p>
                        <p className="mt-1 text-[11px] text-stone-600 dark:text-stone-400">{r.subtitle}</p>
                    </div>

                    <Dashed />

                    <ol className="space-y-2">
                        {r.log.map((line, i) => (
                            <li key={i} className="flex gap-3">
                                <span className={`w-9 shrink-0 font-medium ${TAG_TONE[line.tag] ?? "text-stone-600 dark:text-stone-400"}`}>
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
                                <dd className="text-right font-medium">{row.v}</dd>
                            </div>
                        ))}
                    </dl>

                    <Dashed />

                    <p className="text-center text-[11px] uppercase tracking-[0.2em] text-stone-600 dark:text-stone-400">
                        {r.footer}
                    </p>
                </div>
            </div>
            <figcaption className="mt-4 font-serif text-[15px] italic leading-snug text-stone-600 dark:text-stone-400">
                {r.caption}
            </figcaption>
        </figure>
    );
}
