import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, X, Lock } from "lucide-react";
import { projects, projectFilters, sections } from "../data/portfolio";
import ProjectVisual from "../components/ProjectVisual";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { CATEGORY_TONE, categoryTone } from "../components/tones";

const STATUS_DOT = {
    Live: "bg-brand-green",
    Production: "bg-brand-green",
    Pilot: "bg-brand-yellow",
    MVP: "bg-brand-yellow",
    "Dalam pengembangan": "bg-brand-yellow",
    Internal: "bg-stone-400",
};

const pad = (n) => String(n).padStart(2, "0");

function Status({ status }) {
    return (
        <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status] ?? "bg-stone-400"}`} />
            {status}
        </span>
    );
}

function Category({ name }) {
    return (
        <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className={`h-2 w-2 rounded-full ${categoryTone(name).bg}`} />
            {name}
        </span>
    );
}

function DetailBlock({ title, items }) {
    if (!items?.length) return null;
    return (
        <section className="mt-10">
            <h3 className="text-xl">{title}</h3>
            <ol className="hairline mt-4 border-t">
                {items.map((item, i) => (
                    <li key={item} className="hairline flex gap-4 border-b py-3 text-[15px] leading-relaxed">
                        <span className="muted w-6 shrink-0 font-mono text-xs leading-7">{pad(i + 1)}</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ol>
        </section>
    );
}

// Bento-style card for the project index. The whole card is clickable through a stretched
// title button (no <div> inside <button>), and the keyboard focus ring wraps the full card.
function ProjectCard({ project: p, number, onOpen }) {
    const tone = categoryTone(p.category);
    return (
        <article className="panel group relative flex h-full flex-col p-3 transition-[box-shadow,border-color] duration-300 hover:border-brand-purple/25 hover:shadow-glow has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-teal dark:hover:border-white/20 dark:has-[:focus-visible]:ring-brand-teal-light">
            <ProjectVisual kind={p.visual} tone={CATEGORY_TONE[p.category]} className="aspect-[16/9] w-full rounded-xl" />
            <div className="flex flex-1 flex-col px-2 pb-1 pt-4">
                <p className="label flex flex-wrap items-center gap-x-2 gap-y-1 !text-xs">
                    <span className={`font-mono font-semibold ${tone.text}`}>{pad(number)}</span>
                    <Category name={p.category} />
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{p.year}</span>
                </p>
                <h4 className="mt-3 text-lg leading-snug tracking-[-0.02em]">
                    <button
                        type="button"
                        onClick={(e) => onOpen(p.id, e)}
                        className={`cursor-pointer text-left transition-colors duration-200 after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:ring-0 focus-visible:ring-offset-0 ${tone.hoverText}`}
                    >
                        {p.title}
                    </button>
                </h4>
                <p className="muted mt-2 line-clamp-2 text-sm leading-relaxed">{p.tagline}</p>
                <div className="hairline mt-auto flex items-center justify-between gap-3 border-t pt-3 text-xs">
                    <span className="muted">
                        <Status status={p.status} />
                    </span>
                    <span className={`inline-flex items-center gap-1 font-semibold ${tone.text}`}>
                        Lihat detail
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                </div>
            </div>
        </article>
    );
}

function ProjectDrawer({ project, next, onClose, onNext }) {
    const closeRef = useRef(null);
    const panelRef = useRef(null);
    const reduce = useReducedMotion();
    const tone = categoryTone(project.category);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        const previousOverflow = document.body.style.overflow;
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [onClose]);

    // New project (first open or "next"): start at the top and move focus into the dialog.
    useEffect(() => {
        panelRef.current?.scrollTo({ top: 0 });
        closeRef.current?.focus();
    }, [project.id]);

    return (
        <div className="fixed inset-0 z-[60]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            />
            <motion.div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="drawer-title"
                initial={reduce ? { opacity: 0 } : { x: "100%" }}
                animate={reduce ? { opacity: 1 } : { x: 0 }}
                exit={reduce ? { opacity: 0 } : { x: "100%" }}
                transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-y-0 right-0 w-full max-w-2xl overflow-y-auto bg-paper shadow-2xl sm:rounded-l-3xl dark:bg-night"
            >
                <div className="hairline sticky top-0 z-10 flex items-center justify-between border-b bg-paper/90 px-6 py-2 backdrop-blur-xl sm:px-10 dark:bg-night/90">
                    <p className="label flex items-center gap-2">
                        <Category name={project.category} />
                        <span aria-hidden="true">·</span>
                        {project.year}
                    </p>
                    <button
                        ref={closeRef}
                        type="button"
                        onClick={onClose}
                        className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl px-2 text-sm font-semibold transition-colors duration-200 hover:text-accent dark:hover:text-accent-bright"
                    >
                        <X className="h-4 w-4" />
                        Tutup
                    </button>
                </div>

                <article className="px-6 pb-16 pt-8 sm:px-10">
                    <ProjectVisual
                        kind={project.visual}
                        tone={CATEGORY_TONE[project.category]}
                        className="aspect-[16/9] w-full rounded-2xl ring-1 ring-brand-purple/10"
                    />

                    <h2 id="drawer-title" className="mt-8 text-[2.1rem] leading-[1.1] tracking-[-0.04em] sm:text-[2.6rem]">
                        {project.title}
                    </h2>
                    <p className="muted mt-4 text-lg leading-relaxed">{project.tagline}</p>

                    <dl className="panel mt-8 grid grid-cols-2 gap-x-6 gap-y-5 p-5 text-[15px]">
                        <div>
                            <dt className="label">Peran saya</dt>
                            <dd className="mt-1 font-medium">{project.role}</dd>
                        </div>
                        <div>
                            <dt className="label">Status</dt>
                            <dd className="mt-1 font-medium">
                                <Status status={project.status} />
                            </dd>
                        </div>
                        <div className="col-span-2">
                            <dt className="label">Masalahnya</dt>
                            <dd className="mt-1 leading-relaxed">{project.problem}</dd>
                        </div>
                    </dl>

                    {project.metric && (
                        <div className={`mt-8 border-l-[3px] pl-5 ${tone.border}`}>
                            <p className={`font-display text-5xl font-semibold leading-none tracking-[-0.04em] ${tone.text}`}>{project.metric.value}</p>
                            <p className="muted mt-2 text-sm">{project.metric.label}</p>
                        </div>
                    )}

                    <DetailBlock title="Yang saya bangun" items={project.built} />
                    <DetailBlock title="AI di dalamnya" items={project.ai} />
                    <DetailBlock title="Keputusan produk & UX" items={project.design} />
                    <DetailBlock title="Hasil" items={project.impact} />

                    <div className="mt-10">
                        <h3 className="label">Stack</h3>
                        <p className="mt-2 text-[15px] leading-relaxed">{project.stack.join(" · ")}</p>
                    </div>

                    {(project.links?.length > 0 || project.note) && (
                        <div className="mt-10 space-y-4">
                            {project.links?.length > 0 && (
                                <div className="flex flex-wrap gap-3">
                                    {project.links.map((l) => (
                                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-line !min-h-[44px]">
                                            {l.label}
                                            <ArrowUpRight className="h-4 w-4" />
                                        </a>
                                    ))}
                                </div>
                            )}
                            {project.note && (
                                <p className="muted flex items-start gap-2 text-sm">
                                    <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                                    {project.note}
                                </p>
                            )}
                        </div>
                    )}

                    <button
                        type="button"
                        onClick={onNext}
                        className="panel group mt-14 flex w-full cursor-pointer items-end justify-between gap-6 p-5 text-left transition-shadow duration-300 hover:shadow-glow"
                    >
                        <span>
                            <span className="label block">Proyek berikutnya</span>
                            <span className={`mt-2 block font-display text-xl font-semibold leading-snug tracking-[-0.02em] transition-colors duration-200 ${categoryTone(next.category).hoverText}`}>
                                {next.title}
                            </span>
                        </span>
                        <ArrowRight className={`h-6 w-6 shrink-0 transition-colors duration-200 ${categoryTone(next.category).hoverText}`} />
                    </button>
                </article>
            </motion.div>
        </div>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState(projectFilters[0]);
    const [selectedId, setSelectedId] = useState(null);
    const lastTrigger = useRef(null);
    const reduce = useReducedMotion();

    const featured = projects.filter((p) => p.featured);
    const visible = filter === projectFilters[0] ? projects : projects.filter((p) => p.category === filter);

    const selectedIndex = projects.findIndex((p) => p.id === selectedId);
    const selected = selectedIndex >= 0 ? projects[selectedIndex] : null;
    const next = selected ? projects[(selectedIndex + 1) % projects.length] : null;

    const open = (id, e) => {
        lastTrigger.current = e.currentTarget;
        setSelectedId(id);
    };
    const close = () => {
        setSelectedId(null);
        lastTrigger.current?.focus();
    };

    return (
        <section id="karya" aria-labelledby="karya-title" className="py-20 sm:py-28">
            <div className="container-page">
                <SectionHeader id="karya-title" {...sections.work} />

                <ol className="mt-12">
                    {featured.map((p, i) => {
                        const tone = categoryTone(p.category);
                        return (
                            <li key={p.id} className="hairline border-t py-12 first:border-t-0 first:pt-2 lg:py-16">
                                <Reveal className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
                                    <div className="flex flex-col lg:col-span-5">
                                        <p className="label flex flex-wrap items-center gap-x-2.5 gap-y-1">
                                            <span className={`font-mono font-semibold ${tone.text}`}>{pad(i + 1)}</span>
                                            <Category name={p.category} />
                                            <span aria-hidden="true">·</span>
                                            <span>{p.year}</span>
                                            <span aria-hidden="true">·</span>
                                            <Status status={p.status} />
                                        </p>
                                        <h3 className="mt-4 text-[1.9rem] leading-[1.12] tracking-[-0.035em] sm:text-4xl">{p.title}</h3>
                                        <p className="mt-4 text-[17px] leading-relaxed text-stone-700 dark:text-stone-300">{p.summary}</p>
                                        {p.metric && (
                                            <div className={`mt-6 border-l-[3px] pl-4 ${tone.border}`}>
                                                <p className={`font-display text-4xl font-semibold leading-none tracking-[-0.04em] ${tone.text}`}>{p.metric.value}</p>
                                                <p className="muted mt-2 text-sm">{p.metric.label}</p>
                                            </div>
                                        )}
                                        <p className="muted mt-6 text-sm">{p.stack.slice(0, 5).join(" · ")}</p>
                                        <button
                                            type="button"
                                            onClick={(e) => open(p.id, e)}
                                            className="link-u mt-8 inline-flex items-center gap-2 self-start text-[15px] font-semibold"
                                        >
                                            Baca studi kasus
                                            <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <div className="cursor-pointer lg:col-span-7" onClick={(e) => open(p.id, e)}>
                                        <ProjectVisual
                                            kind={p.visual}
                                            tone={CATEGORY_TONE[p.category]}
                                            className="aspect-[16/10] w-full rounded-3xl shadow-panel ring-1 ring-brand-purple/10 transition-shadow duration-300 hover:shadow-glow"
                                        />
                                    </div>
                                </Reveal>
                            </li>
                        );
                    })}
                </ol>

                <div className="mt-12 sm:mt-20">
                    <div className="hairline flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-end sm:justify-between">
                        <h3 className="text-2xl sm:text-3xl">
                            Semua proyek <span className="muted font-sans text-base font-normal tabular-nums">({visible.length})</span>
                        </h3>
                        <div role="group" aria-label="Filter kategori proyek" className="flex flex-wrap gap-2">
                            {projectFilters.map((f) => {
                                const active = filter === f;
                                const dot = f === projectFilters[0] ? "bg-ink dark:bg-stone-100" : categoryTone(f).bg;
                                return (
                                    <button
                                        key={f}
                                        type="button"
                                        onClick={() => setFilter(f)}
                                        aria-pressed={active}
                                        className={`inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-200 ${active
                                            ? "border-brand-purple/30 bg-white text-ink shadow-panel dark:border-white/20 dark:bg-white/10 dark:text-white"
                                            : "border-transparent text-stone-600 hover:text-ink dark:text-stone-400 dark:hover:text-white"
                                            }`}
                                    >
                                        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                                        {f}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <ul aria-label="Daftar proyek" className="relative mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence initial={false} mode="popLayout">
                            {visible.map((p) => (
                                <motion.li
                                    key={p.id}
                                    layout={!reduce}
                                    initial={reduce ? false : { opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                >
                                    <ProjectCard project={p} number={projects.indexOf(p) + 1} onOpen={open} />
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <ProjectDrawer project={selected} next={next} onClose={close} onNext={() => setSelectedId(next.id)} />
                )}
            </AnimatePresence>
        </section>
    );
}
