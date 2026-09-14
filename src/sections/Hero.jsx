import { Fragment } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { profile, heroMeta, stats } from "../data/portfolio";
import Reveal from "../components/Reveal";
import OrderReceipt from "../components/OrderReceipt";
import { toneAt } from "../components/tones";

export default function Hero() {
    return (
        <section id="beranda" className="pt-24 sm:pt-28">
            <div className="container-page">
                <Reveal>
                    <ul className="label grid grid-cols-2 gap-x-6 gap-y-2 border-b border-ink pb-4 sm:grid-cols-4 dark:border-stone-100">
                        {heroMeta.map((item, i) => (
                            <li
                                key={item}
                                className={i === heroMeta.length - 1 ? "flex items-center gap-2 text-ink dark:text-stone-100" : ""}
                            >
                                {i === heroMeta.length - 1 && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-green" />}
                                {item}
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <div className="grid gap-14 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-8">
                        <Reveal delay={0.05}>
                            <h1 className="text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[5.25rem]">
                                {profile.headline.before}{" "}
                                <em className="marker italic text-accent dark:text-accent-bright">
                                    {/* Keep hyphenated words like "benar-benar" on one line */}
                                    {profile.headline.highlight.split(" ").map((word, i) => (
                                        // The space stays outside the nowrap span so lines can still break between words.
                                        <Fragment key={i}>
                                            {i > 0 && " "}
                                            <span className="whitespace-nowrap">{word}</span>
                                        </Fragment>
                                    ))}
                                </em>
                                {profile.headline.after}
                            </h1>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-700 dark:text-stone-300">
                                {profile.subheadline}
                            </p>
                            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                                <a href="#karya" className="btn-primary">
                                    {profile.ctaPrimary}
                                    <ArrowDownRight className="h-4 w-4" />
                                </a>
                                <a href="#kontak" className="btn-line">
                                    {profile.ctaSecondary}
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.15} className="lg:col-span-4 lg:pt-3">
                        <OrderReceipt />
                    </Reveal>
                </div>

                <Reveal delay={0.1}>
                    <dl className="mt-16 grid grid-cols-2 border-t border-ink lg:grid-cols-4 dark:border-stone-100">
                        {stats.map((s, i) => (
                            <div key={s.label} className="flex flex-col-reverse py-6 pr-4 lg:border-l lg:border-ink/15 lg:pl-6 lg:first:border-l-0 lg:first:pl-0 dark:lg:border-stone-100/15">
                                <dt className="label mt-2 max-w-[14rem]">{s.label}</dt>
                                <dd className="font-serif text-5xl leading-none sm:text-6xl">
                                    <span aria-hidden="true" className={`mb-5 block h-1 w-8 ${toneAt(i).bg}`} />
                                    {s.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </Reveal>
            </div>
        </section>
    );
}
