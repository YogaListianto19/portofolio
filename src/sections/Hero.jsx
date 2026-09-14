import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { profile, heroConsole, stats } from "../data/portfolio";

const TONES = {
    info: "text-zinc-500 dark:text-zinc-400",
    ok: "text-emerald-600 dark:text-emerald-400",
    ai: "text-brand-600 dark:text-brand-400",
    warn: "text-amber-600 dark:text-amber-400",
};

export default function Hero() {
    const reduce = useReducedMotion();
    const fade = (delay) => ({
        initial: reduce ? false : { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut", delay },
    });

    return (
        <section id="home" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
            <div
                aria-hidden="true"
                className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]"
            />

            <div className="container-page relative grid items-center gap-12 lg:grid-cols-12">
                <div className="lg:col-span-7">
                    <motion.p {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                        <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-500" />
                        {profile.availability}
                    </motion.p>

                    <motion.p {...fade(0.05)} className="mt-6 font-mono text-sm text-zinc-500 dark:text-zinc-400">
                        {profile.name} — {profile.roles.join(" · ")}
                    </motion.p>

                    <motion.h1
                        {...fade(0.1)}
                        className="mt-3 text-4xl font-extrabold leading-[1.08] text-zinc-900 sm:text-5xl lg:text-[3.4rem] dark:text-white"
                    >
                        {profile.headline.before}{" "}
                        <span className="text-brand-600 sm:whitespace-nowrap dark:text-brand-400">{profile.headline.highlight}</span>
                        {profile.headline.after}
                    </motion.h1>

                    <motion.p {...fade(0.15)} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {profile.subheadline}
                    </motion.p>

                    <motion.div {...fade(0.2)} className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a href="#work" className="btn-primary">
                            {profile.ctaPrimary}
                            <ArrowRight className="h-4 w-4" />
                        </a>
                        <a href="#contact" className="btn-secondary">
                            <Mail className="h-4 w-4" />
                            {profile.ctaSecondary}
                        </a>
                    </motion.div>

                    <motion.dl {...fade(0.25)} className="mt-12 grid grid-cols-2 gap-6 border-t border-zinc-200 pt-8 sm:grid-cols-4 dark:border-zinc-800">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <dt className="text-xs leading-snug text-zinc-500 dark:text-zinc-400">{s.label}</dt>
                                <dd className="mt-1 font-heading text-2xl font-bold text-zinc-900 dark:text-white">{s.value}</dd>
                            </div>
                        ))}
                    </motion.dl>
                </div>

                <motion.div {...fade(0.2)} className="lg:col-span-5">
                    <div className="card overflow-hidden shadow-xl shadow-zinc-900/5 dark:shadow-black/40">
                        <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
                            <div className="flex items-center gap-1.5" aria-hidden="true">
                                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
                            </div>
                            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{heroConsole.title}</span>
                        </div>
                        <ol className="space-y-2.5 p-4 font-mono text-[12.5px] leading-relaxed">
                            {heroConsole.lines.map((line, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className={`w-12 shrink-0 font-medium ${TONES[line.tone] ?? TONES.info}`}>{line.tag}</span>
                                    <span className="text-zinc-700 dark:text-zinc-300">{line.text}</span>
                                </li>
                            ))}
                        </ol>
                        <p className="border-t border-zinc-200 bg-zinc-50 px-4 py-3 text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
                            {heroConsole.caption}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
