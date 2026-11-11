import { Eye, Maximize2 } from "lucide-react";
import { SHOTS } from "../data/shots";
import { TONES, CATEGORY_TONE } from "./tones";
import ProjectVisual from "./ProjectVisual";

// Real screenshots of the systems, rendered from the actual code/templates with sample data.
// Projects without screenshots (client or strictly internal systems) fall back to the SVG illustration.

const BASE = import.meta.env.BASE_URL;
const src = (id, small) => `${BASE}shots/${id}${small ? "-sm" : ""}.webp`;
const smallWidth = (s) => Math.min(s.kind === "desktop" ? 720 : 390, s.w);

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
export default function ProjectShowcase({ project, size = "card", className = "" }) {
    const tone = CATEGORY_TONE[project.category];
    const shots = (project.shots ?? []).filter((s) => SHOTS[s.id]);
    if (!shots.length) return <ProjectVisual kind={project.visual} tone={tone} className={className} />;

    const desktop = shots.find((s) => SHOTS[s.id].kind === "desktop");
    const phones = shots.filter((s) => SHOTS[s.id].kind === "mobile").slice(0, desktop ? 1 : 2);
    const t = TONES[tone] ?? TONES.purple;
    const vw = { card: "(min-width:1024px) 30vw, (min-width:640px) 45vw, 90vw", feature: "(min-width:1024px) 52vw, 92vw", drawer: "(min-width:672px) 640px, 92vw" }[size];
    const phoneVw = { card: "(min-width:1024px) 9vw, 28vw", feature: "(min-width:1024px) 14vw, 30vw", drawer: "200px" }[size];

    return (
        <div className={`relative isolate overflow-hidden [container-type:inline-size] ${t.tint} ${className}`}>
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
        </div>
    );
}

// Drawer gallery: every screenshot at its natural ratio, each opening the full-size file in a new tab.
export function ShotGallery({ project }) {
    const shots = (project.shots ?? []).filter((s) => SHOTS[s.id]);
    if (!shots.length) return null;
    const desktops = shots.filter((s) => SHOTS[s.id].kind === "desktop");
    const phones = shots.filter((s) => SHOTS[s.id].kind === "mobile");

    const Link = ({ shot, children }) => (
        <a
            href={src(shot.id)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buka gambar ukuran penuh: ${shot.caption}`}
            className="group/shot relative block cursor-zoom-in rounded-xl focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
            {children}
            <span aria-hidden="true" className="absolute right-2 top-2 z-10 rounded-full bg-white/90 p-1.5 text-ink opacity-0 shadow-sm transition-opacity duration-200 group-hover/shot:opacity-100 dark:bg-night/90 dark:text-stone-100">
                <Maximize2 className="h-3.5 w-3.5" />
            </span>
        </a>
    );

    return (
        <section className="mt-10">
            <h3 className="text-xl">Tampilan layar</h3>
            {project.shotNote && <p className="muted mt-2 text-sm leading-relaxed">{project.shotNote}</p>}

            <div className="mt-5 space-y-6">
                {desktops.map((s) => (
                    <figure key={s.id}>
                        <Link shot={s}>
                            <BrowserFrame>
                                <ShotImage id={s.id} alt={s.caption} sizes="(min-width:672px) 640px, 92vw" className="block h-auto w-full" />
                            </BrowserFrame>
                        </Link>
                        <figcaption className="muted mt-2.5 text-sm leading-relaxed">{s.caption}</figcaption>
                    </figure>
                ))}
            </div>

            {phones.length > 0 && (
                <div className={`mt-6 grid gap-x-4 gap-y-6 ${phones.length === 1 ? "max-w-[15rem]" : "grid-cols-2 sm:grid-cols-3"}`}>
                    {phones.map((s) => (
                        <figure key={s.id}>
                            <Link shot={s}>
                                <PhoneFrame>
                                    <ShotImage id={s.id} alt={s.caption} sizes="(min-width:640px) 200px, 45vw" className="block h-auto w-full" />
                                </PhoneFrame>
                            </Link>
                            <figcaption className="muted mt-2.5 text-[13px] leading-relaxed">{s.caption}</figcaption>
                        </figure>
                    ))}
                </div>
            )}
        </section>
    );
}
