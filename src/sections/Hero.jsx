import { Fragment } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { profile, heroMeta, stats } from "../data/portfolio";
import Reveal from "../components/Reveal";
import Aurora from "../components/Aurora";
import OrderReceipt from "../components/OrderReceipt";
import { toneAt } from "../components/tones";

export default function Hero() {
    return (
        <section id="beranda" className="relative isolate overflow-hidden pb-4 pt-28 sm:pt-32">
            <Aurora />

            <div className="container-page">
                <Reveal>
                    <ul className="label hairline grid grid-cols-2 gap-x-6 gap-y-2 border-b pb-4 sm:grid-cols-4">
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

                <div className="grid items-start gap-14 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-7 xl:col-span-8">
                        <Reveal delay={0.05}>
                            <p className="mb-4 font-display text-base font-semibold tracking-[-0.01em] text-accent sm:text-lg dark:text-accent-bright">
                                {profile.brand}
                            </p>
                            <h1 className="text-[2.6rem] leading-[1.04] tracking-[-0.045em] sm:text-[3.4rem] lg:text-[3.6rem]">
                                {profile.headline.before}{" "}
                                <span className="text-gradient">
                                    {profile.headline.highlight.split(" ").map((word, i) => (
                                        // The space stays outside the nowrap span so lines can still break between words.
                                        <Fragment key={i}>
                                            {i > 0 && " "}
                                            <span className="whitespace-nowrap">{word}</span>
                                        </Fragment>
                                    ))}
                                </span>
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

                    <Reveal delay={0.15} className="lg:col-span-5 lg:pt-2 xl:col-span-4">
                        <OrderReceipt />
                    </Reveal>
                </div>

                <Reveal delay={0.1}>
                    <dl className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                        {stats.map((s, i) => (
                            <div key={s.label} className="panel flex flex-col-reverse p-5 sm:p-6">
                                <dt className="label mt-2">{s.label}</dt>
                                <dd className="font-display text-4xl font-semibold leading-none tracking-[-0.04em] sm:text-5xl">
                                    <span aria-hidden="true" className={`mb-5 block h-1 w-8 rounded-full ${toneAt(i).bg}`} />
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
