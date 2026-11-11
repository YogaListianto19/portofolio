import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Eye, X, ZoomIn } from "lucide-react";
import { SHOTS } from "../data/shots";
import { TONES, CATEGORY_TONE } from "./tones";
import ProjectVisual from "./ProjectVisual";

// Real screenshots of the systems, rendered from the actual code/templates with sample data.
// Projects without screenshots (client or strictly internal systems) fall back to the SVG illustration.

const BASE = import.meta.env.BASE_URL;
const src = (id, small) => `${BASE}shots/${id}${small ? "-sm" : ""}.webp`;
const smallWidth = (s) => Math.min(s.kind === "desktop" ? 720 : 390, s.w);

// Gallery and lightbox order: desktop screens first, then phone screens.
function orderedShots(project) {
    const shots = (project.shots ?? []).filter((s) => SHOTS[s.id]);
    return [...shots.filter((s) => SHOTS[s.id].kind === "desktop"), ...shots.filter((s) => SHOTS[s.id].kind === "mobile")];
}

export function ShotImage({ id, alt, sizes, eager = false, className = "" }) {
    const s = SHOTS[id];
    if (!s) return null;
    return (
        <img
            src={src(id, true)}
            srcSet={`${src(id, true)} ${smallWidth(s)}w, ${src(id)} ${s.w}w`}
            sizes={sizes}
            width={s.w}
            height={s.h}
            alt={alt}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className={className}
        />
    );
}

export function BrowserFrame({ children, className = "" }) {
    return (
        <div className={`overflow-hidden rounded-xl bg-white shadow-[0_22px_44px_-22px_rgba(29,23,36,0.55)] ring-1 ring-ink/10 dark:bg-night-raised dark:ring-white/10 ${className}`}>
            <div aria-hidden="true" className="flex h-[clamp(12px,3.2cqw,22px)] items-center gap-[clamp(3px,0.8cqw,6px)] border-b border-ink/10 bg-paper px-[clamp(6px,1.6cqw,12px)] dark:border-white/10 dark:bg-night">
                {["bg-brand-pink", "bg-brand-yellow", "bg-brand-green"].map((c) => (
                    <span key={c} className={`aspect-square h-[38%] rounded-full ${c} opacity-80`} />
                ))}
            </div>
            {children}
        </div>
    );
}

export function PhoneFrame({ children, className = "" }) {
    return (
        <div className={`rounded-[clamp(12px,3.4cqw,1.9rem)] bg-ink p-[clamp(2px,0.6cqw,6px)] shadow-[0_22px_44px_-20px_rgba(29,23,36,0.6)] ring-1 ring-ink/20 dark:bg-stone-900 dark:ring-white/15 ${className}`}>
            <div className="overflow-hidden rounded-[clamp(10px,3cqw,1.65rem)] bg-white">{children}</div>
        </div>
    );
}

export function ShotBadge({ children, className = "" }) {
    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold leading-none text-ink shadow-sm ring-1 ring-ink/5 backdrop-blur dark:bg-night/85 dark:text-stone-100 dark:ring-white/10 ${className}`}>
            <Eye aria-hidden="true" className="h-3 w-3" />
            {children}
        </span>
    );
}

const lift = "transition-transform duration-500 ease-out group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0";

// Composite cover: desktop screen + phone, desktop alone, or one/two phones.
// `size` picks the image width hint: "card" (grid), "feature" (featured row) or "drawer".
// With `onOpen`, the cover becomes a button that opens the lightbox.
export default function ProjectShowcase({ project, size = "card", className = "", onOpen }) {
    const tone = CATEGORY_TONE[project.category];
    const shots = orderedShots(project);
    if (!shots.length) return <ProjectVisual kind={project.visual} tone={tone} className={className} />;

    const desktop = shots.find((s) => SHOTS[s.id].kind === "desktop");
    const phones = shots.filter((s) => SHOTS[s.id].kind === "mobile").slice(0, desktop ? 1 : 2);
    const t = TONES[tone] ?? TONES.purple;
    const vw = { card: "(min-width:1024px) 30vw, (min-width:640px) 45vw, 90vw", feature: "(min-width:1024px) 52vw, 92vw", drawer: "(min-width:672px) 640px, 92vw" }[size];
    const phoneVw = { card: "(min-width:1024px) 9vw, 28vw", feature: "(min-width:1024px) 14vw, 30vw", drawer: "200px" }[size];

    const body = (
        <>
            {project.shotBadge && <ShotBadge className="absolute left-3 top-3 z-20">{project.shotBadge}</ShotBadge>}

            {desktop && (
                <BrowserFrame className={`absolute left-[6%] top-[max(15%,2.7rem)] ${phones.length ? "w-[74%]" : "w-[88%]"} ${lift}`}>
                    <ShotImage id={desktop.id} alt={desktop.caption} sizes={vw} className="block aspect-[16/10] w-full object-cover object-top" />
                </BrowserFrame>
            )}

            {phones.map((p, i) => {
                const pos = desktop
                    ? "right-[5%] top-[max(24%,4.2rem)] w-[24%]"
                    : phones.length === 2
                      ? i === 0
                          ? "left-[19%] top-[max(14%,2.7rem)] w-[29%]"
                          : "right-[19%] top-[max(22%,3.6rem)] w-[29%]"
                      : "left-1/2 top-[max(14%,2.7rem)] w-[31%] -translate-x-1/2";
                return (
                    <PhoneFrame key={p.id} className={`absolute z-10 ${pos} ${lift}`}>
                        <ShotImage id={p.id} alt={p.caption} sizes={phoneVw} className="block h-auto w-full" />
                    </PhoneFrame>
                );
            })}
        </>
    );

    const frame = `relative isolate overflow-hidden [container-type:inline-size] ${t.tint} ${className}`;
    if (!onOpen) return <div className={frame}>{body}</div>;

    return (
        <button
            type="button"
            onClick={() => onOpen(0)}
            aria-label={`Perbesar tampilan layar ${project.title}`}
            className={`group block cursor-zoom-in text-left focus-visible:ring-2 focus-visible:ring-brand-teal ${frame}`}
        >
            {body}
            <span aria-hidden="true" className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur transition-colors duration-200 group-hover:bg-ink">
                <ZoomIn className="h-3.5 w-3.5" />
                Klik untuk perbesar
            </span>
        </button>
    );
}

// Drawer gallery: every screenshot at its natural ratio; clicking one opens the lightbox.
export function ShotGallery({ project, onOpen }) {
    const shots = orderedShots(project);
    if (!shots.length) return null;
    const desktops = shots.filter((s) => SHOTS[s.id].kind === "desktop");
    const phones = shots.filter((s) => SHOTS[s.id].kind === "mobile");

    const Zoom = ({ shot, children }) => (
        <button
            type="button"
            onClick={() => onOpen(shots.indexOf(shot))}
            aria-label={`Perbesar: ${shot.caption}`}
            className="group/shot relative block w-full cursor-zoom-in rounded-xl text-left focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
            {children}
            <span aria-hidden="true" className="absolute right-2 top-2 z-10 rounded-full bg-ink/80 p-2 text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover/shot:opacity-100 group-focus-visible/shot:opacity-100">
                <ZoomIn className="h-4 w-4" />
            </span>
        </button>
    );

    return (
        <section className="mt-10">
            <h3 className="text-xl">Tampilan layar</h3>
            {project.shotNote && <p className="muted mt-2 text-sm leading-relaxed">{project.shotNote}</p>}
            <p className="muted mt-1 flex items-center gap-1.5 text-xs">
                <ZoomIn aria-hidden="true" className="h-3.5 w-3.5" />
                Klik gambar untuk memperbesar.
            </p>

            <div className="mt-5 space-y-6">
                {desktops.map((s) => (
                    <figure key={s.id}>
                        <Zoom shot={s}>
                            <BrowserFrame>
                                <ShotImage id={s.id} alt={s.caption} sizes="(min-width:672px) 640px, 92vw" className="block h-auto w-full" />
                            </BrowserFrame>
                        </Zoom>
                        <figcaption className="muted mt-2.5 text-sm leading-relaxed">{s.caption}</figcaption>
                    </figure>
                ))}
            </div>

            {phones.length > 0 && (
                <div className={`mt-6 grid gap-x-4 gap-y-6 ${phones.length === 1 ? "max-w-[15rem]" : "grid-cols-2 sm:grid-cols-3"}`}>
                    {phones.map((s) => (
                        <figure key={s.id}>
                            <Zoom shot={s}>
                                <PhoneFrame>
                                    <ShotImage id={s.id} alt={s.caption} sizes="(min-width:640px) 200px, 45vw" className="block h-auto w-full" />
                                </PhoneFrame>
                            </Zoom>
                            <figcaption className="muted mt-2.5 text-[13px] leading-relaxed">{s.caption}</figcaption>
                        </figure>
                    ))}
                </div>
            )}
        </section>
    );
}

// Full-screen image viewer. Rendered in a portal so it is not trapped inside the drawer's
// transformed panel. Keys are caught in the capture phase so Escape closes only the viewer.
export function ShotLightbox({ project, index, onIndex, onClose }) {
    const shots = orderedShots(project);
    const reduce = useReducedMotion();
    const closeRef = useRef(null);
    const returnFocus = useRef(null);
    const open = index !== null && index >= 0 && index < shots.length;
    const count = shots.length;

    useEffect(() => {
        if (!open) return undefined;
        returnFocus.current ??= document.activeElement;
        closeRef.current?.focus();
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
            else if (e.key === "ArrowRight" && count > 1) onIndex((index + 1) % count);
            else if (e.key === "ArrowLeft" && count > 1) onIndex((index - 1 + count) % count);
            else return;
            e.preventDefault();
            e.stopPropagation();
        };
        window.addEventListener("keydown", onKey, true);
        return () => window.removeEventListener("keydown", onKey, true);
    }, [open, index, count, onClose, onIndex]);

    useEffect(() => {
        if (open || !returnFocus.current) return;
        returnFocus.current.focus?.();
        returnFocus.current = null;
    }, [open]);

    const shot = open ? shots[index] : null;
    const meta = shot ? SHOTS[shot.id] : null;
    const navBtn = "absolute top-1/2 z-10 -translate-y-1/2 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition-colors duration-200 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-brand-teal-light";

    return createPortal(
        <AnimatePresence>
            {shot && (
                <motion.div
                    key="lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Tampilan layar ${index + 1} dari ${count}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduce ? 0 : 0.2 }}
                    className="fixed inset-0 z-[80] flex flex-col bg-ink/90 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm text-white/80 sm:px-6" onClick={(e) => e.stopPropagation()}>
                        <span className="tabular-nums">
                            {index + 1} / {count}
                            {project.shotBadge && <span className="ml-3 hidden text-white/60 sm:inline">{project.shotBadge}</span>}
                        </span>
                        <span className="flex items-center gap-2">
                            <a
                                href={src(shot.id)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl px-3 font-semibold text-white/85 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                            >
                                <ExternalLink className="h-4 w-4" />
                                <span className="hidden sm:inline">Buka file asli</span>
                            </a>
                            <button
                                ref={closeRef}
                                type="button"
                                onClick={onClose}
                                className="inline-flex min-h-[44px] cursor-pointer items-center gap-1.5 rounded-xl px-3 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                            >
                                <X className="h-5 w-5" />
                                Tutup
                            </button>
                        </span>
                    </div>

                    <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 pb-2 sm:px-20">
                        <motion.img
                            key={shot.id}
                            src={src(shot.id)}
                            width={meta.w}
                            height={meta.h}
                            alt={shot.caption}
                            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`h-auto max-h-full w-auto max-w-full rounded-xl object-contain shadow-2xl ${meta.kind === "mobile" ? "ring-[6px] ring-black" : "ring-1 ring-white/10"}`}
                        />
                        {count > 1 && (
                            <>
                                <button type="button" aria-label="Gambar sebelumnya" onClick={(e) => (e.stopPropagation(), onIndex((index - 1 + count) % count))} className={`${navBtn} left-2 sm:left-5`}>
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <button type="button" aria-label="Gambar berikutnya" onClick={(e) => (e.stopPropagation(), onIndex((index + 1) % count))} className={`${navBtn} right-2 sm:right-5`}>
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </>
                        )}
                    </div>

                    <p className="mx-auto max-w-3xl px-6 pb-5 pt-2 text-center text-sm leading-relaxed text-white/85" onClick={(e) => e.stopPropagation()}>
                        {shot.caption}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    );
}
