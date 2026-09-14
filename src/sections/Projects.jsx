import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X, Lock, ExternalLink, Sparkles } from "lucide-react";
import { projects, projectFilters } from "../data/portfolio";
import ProjectVisual from "../components/ProjectVisual";
import Reveal from "../components/Reveal";

const STATUS_STYLES = {
    Live: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    "In production": "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
    "In development": "bg-amber-500/10 text-amber-700 dark:text-amber-400",
    Internal: "bg-zinc-500/10 text-zinc-700 dark:text-zinc-300",
};

function StatusBadge({ status }) {
    return (
        <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${STATUS_STYLES[status] ?? STATUS_STYLES.Internal}`}>
            {status}
        </span>
    );
}

function DetailList({ title, items, icon: Icon }) {
    if (!items?.length) return null;
    return (
        <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white">
                {Icon && <Icon className="h-4 w-4 text-brand-600 dark:text-brand-400" />}
                {title}
            </h4>
            <ul className="mt-2.5 space-y-2">
                {items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ProjectModal({ project, onClose }) {
    const closeRef = useRef(null);
    const reduce = useReducedMotion();

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        const previousOverflow = document.body.style.overflow;
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
            />
            <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl dark:bg-zinc-900"
            >
                <button
                    ref={closeRef}
                    type="button"
                    onClick={onClose}
                    aria-label="Close case study"
                    className="absolute right-4 top-4 z-10 grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-zinc-900/70 text-white transition-colors duration-200 hover:bg-zinc-900"
                >
                    <X className="h-5 w-5" />
                </button>

                <ProjectVisual kind={project.visual.kind} accent={project.visual.accent} className="h-48 sm:h-56" />

                <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="eyebrow">{project.category}</span>
                        <span className="text-zinc-300 dark:text-zinc-700">/</span>
                        <span className="font-mono text-xs text-zinc-500">{project.year}</span>
                        <StatusBadge status={project.status} />
                    </div>
                    <h2 id="project-modal-title" className="mt-3 text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-white">
                        {project.title}
                    </h2>
                    <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">{project.tagline}</p>

                    <dl className="mt-6 grid gap-4 rounded-xl border border-zinc-200 p-4 text-sm sm:grid-cols-2 dark:border-zinc-800">
                        <div>
                            <dt className="text-xs uppercase tracking-wider text-zinc-500">My role</dt>
                            <dd className="mt-1 font-medium text-zinc-900 dark:text-zinc-100">{project.role}</dd>
                        </div>
                        <div>
                            <dt className="text-xs uppercase tracking-wider text-zinc-500">Problem</dt>
                            <dd className="mt-1 text-zinc-700 dark:text-zinc-300">{project.problem}</dd>
                        </div>
                    </dl>

                    <div className="mt-8 grid gap-8 sm:grid-cols-2">
                        <DetailList title="What I built" items={project.built} />
                        <DetailList title="AI inside" items={project.ai} icon={Sparkles} />
                        <DetailList title="Product & UX decisions" items={project.design} />
                        <DetailList title="Outcome" items={project.impact} />
                    </div>

                    <div className="mt-8">
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Stack</h4>
                        <ul className="mt-2.5 flex flex-wrap gap-1.5">
                            {project.stack.map((t) => (
                                <li key={t} className="chip">{t}</li>
                            ))}
                        </ul>
                    </div>

                    {(project.links?.length > 0 || project.note) && (
                        <div className="mt-8 flex flex-col gap-4 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
                            {project.note ? (
                                <p className="flex items-start gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                                    <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                                    {project.note}
                                </p>
                            ) : <span />}
                            <div className="flex flex-wrap gap-2">
                                {project.links?.map((l) => (
                                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-secondary !min-h-[40px] !py-2">
                                        {l.label}
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState(projectFilters[0]);
    const [selected, setSelected] = useState(null);
    const lastTrigger = useRef(null);

    const visible = filter === projectFilters[0] ? projects : projects.filter((p) => p.category === filter);

    const open = (project, e) => {
        lastTrigger.current = e.currentTarget;
        setSelected(project);
    };
    const close = () => {
        setSelected(null);
        lastTrigger.current?.focus();
    };

    return (
        <section id="work" className="py-20 sm:py-24">
            <div className="container-page">
                <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="eyebrow">Selected work</p>
                        <h2 className="section-title mt-3">Case studies</h2>
                        <p className="section-lead">
                            Products I scoped, designed, and shipped — from AI agents on WhatsApp to SaaS apps and ERP integrations
                            that move real money.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
                        {projectFilters.map((f) => (
                            <button
                                key={f}
                                type="button"
                                onClick={() => setFilter(f)}
                                aria-pressed={filter === f}
                                className={`min-h-[40px] cursor-pointer rounded-full border px-4 text-sm font-medium transition-colors duration-200 ${filter === f
                                    ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900"
                                    : "border-zinc-300 text-zinc-700 hover:border-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-400"
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </Reveal>

                <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {visible.map((project) => (
                        <li key={project.id}>
                            <article className="card group relative flex h-full flex-col overflow-hidden transition-colors duration-200 hover:border-zinc-400 dark:hover:border-zinc-600">
                                <ProjectVisual kind={project.visual.kind} accent={project.visual.accent} className="h-44" />
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="eyebrow !text-[11px]">{project.category}</span>
                                        <StatusBadge status={project.status} />
                                    </div>
                                    <h3 className="mt-3 text-lg font-bold text-zinc-900 dark:text-white">
                                        <button
                                            type="button"
                                            onClick={(e) => open(project, e)}
                                            className="cursor-pointer text-left after:absolute after:inset-0 after:content-['']"
                                        >
                                            {project.title}
                                        </button>
                                    </h3>
                                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.summary}</p>
                                    <ul className="mt-4 flex flex-wrap gap-1.5">
                                        {project.stack.slice(0, 4).map((t) => (
                                            <li key={t} className="chip">{t}</li>
                                        ))}
                                        {project.stack.length > 4 && <li className="chip">+{project.stack.length - 4}</li>}
                                    </ul>
                                    <p className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-zinc-900 transition-colors duration-200 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
                                        Read case study
                                        <ArrowUpRight className="h-4 w-4" />
                                    </p>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>

            <AnimatePresence>
                {selected && <ProjectModal key={selected.id} project={selected} onClose={close} />}
            </AnimatePresence>
        </section>
    );
}
