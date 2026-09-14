import { TONES } from "./tones";

// Illustrative UI thumbnails drawn as SVG (so they scale to any size) — stand-ins for
// screenshots, so client/internal systems are shown without exposing real data.
// `tone` picks the Odoo accent (by project category).

const BASE = {
    paper: "fill-white dark:fill-night-raised",
    frame: "stroke-ink/15 dark:stroke-stone-100/15",
    line: "fill-stone-300 dark:fill-stone-700",
    fill: "fill-stone-200 dark:fill-stone-800",
    strong: "fill-stone-400 dark:fill-stone-600",
    outline: "fill-none stroke-ink/15 dark:stroke-stone-100/15",
};

const Bar = ({ x, y, w, h = 4, className = BASE.line }) => <rect x={x} y={y} width={w} height={h} rx={h / 2} className={className} />;

function Chat({ c }) {
    return (
        <g>
            <rect x="36" y="48" width="140" height="30" rx="8" className={c.fill} />
            <Bar x="46" y="56" w="100" />
            <Bar x="46" y="66" w="70" />
            <rect x="150" y="86" width="134" height="40" rx="8" className={c.soft} />
            <Bar x="160" y="94" w="30" className={c.accent} />
            <Bar x="160" y="104" w="110" />
            <Bar x="160" y="114" w="80" />
            <rect x="36" y="134" width="110" height="22" rx="8" className={c.fill} />
            <Bar x="46" y="143" w="80" />
            <rect x="36" y="168" width="248" height="22" rx="11" className={`${c.paper} ${c.frame}`} />
            <Bar x="50" y="177" w="190" />
            <circle cx="270" cy="179" r="6" className={c.accent} />
        </g>
    );
}

function Dashboard({ c }) {
    const bars = [40, 65, 50, 80, 58, 92, 70];
    return (
        <g>
            <rect x="68" y="35" width="1" height="165" className="fill-ink/10 dark:fill-stone-100/10" />
            <rect x="34" y="46" width="18" height="18" rx="4" className={c.accent} />
            {[76, 88, 100, 112].map((y) => (
                <Bar key={y} x="34" y={y} w="24" />
            ))}
            {[80, 152, 224].map((x, i) => (
                <g key={x}>
                    <rect x={x} y="46" width="62" height="38" rx="4" className={c.outline} />
                    <Bar x={x + 8} y="56" w="24" />
                    <Bar x={x + 8} y="68" w="40" h="6" className={i === 0 ? c.accent : c.strong} />
                </g>
            ))}
            {bars.map((v, i) => {
                const h = v * 0.9;
                return <rect key={i} x={82 + i * 30} y={190 - h} width="22" height={h} rx="2" className={i === 5 ? c.accent : c.line} />;
            })}
        </g>
    );
}

const FlowNode = ({ c, x, y, active }) => (
    <g>
        <rect
            x={x}
            y={y}
            width={active ? 64 : 56}
            height="26"
            rx="5"
            className={`${c.paper} ${active ? c.ring : c.frame}`}
            strokeWidth={active ? 2 : 1}
        />
        <rect x={x + 7} y={y + 8} width="10" height="10" rx="2" className={active ? c.accent : c.line} />
        <Bar x={x + 22} y={y + 11} w="24" />
    </g>
);

function Flow({ c }) {
    return (
        <g>
            <g className="fill-none stroke-stone-300 dark:stroke-stone-700" strokeWidth="1.5">
                <path d="M96 73 C 114 73, 114 105, 132 105" />
                <path d="M96 137 C 114 137, 114 105, 132 105" />
                <path d="M196 105 C 214 105, 214 73, 232 73" />
                <path d="M196 105 C 214 105, 214 137, 232 137" />
            </g>
            <FlowNode c={c} x={40} y={60} />
            <FlowNode c={c} x={40} y={124} />
            <FlowNode c={c} x={132} y={92} active />
            <FlowNode c={c} x={232} y={60} />
            <FlowNode c={c} x={232} y={124} />
        </g>
    );
}

function Invite({ c }) {
    return (
        <g>
            <rect x="110" y="46" width="100" height="146" rx="6" className={`${c.paper} ${c.frame}`} />
            <circle cx="160" cy="78" r="14" className={`${c.soft} ${c.ring}`} strokeOpacity="0.5" />
            <Bar x="135" y="102" w="50" />
            <Bar x="125" y="114" w="70" h="7" className={c.accent} />
            <Bar x="140" y="129" w="40" />
            <rect x="122" y="150" width="36" height="14" rx="3" className={c.fill} />
            <rect x="162" y="150" width="36" height="14" rx="3" className={c.accent} />
        </g>
    );
}

function Ledger({ c }) {
    const paid = [1, 0, 1, 1, 0];
    return (
        <g>
            <Bar x="40" y="50" w="70" h="5" />
            <rect x="236" y="45" width="44" height="14" rx="3" className={c.accent} />
            {paid.map((p, i) => {
                const y = 70 + i * 24;
                return (
                    <g key={i}>
                        <rect x="40" y={y} width="240" height="18" rx="4" className={c.outline} />
                        <circle cx="52" cy={y + 9} r="4" className={c.line} />
                        <Bar x="62" y={y + 7} w="70" />
                        <Bar x="240" y={y + 5} w="32" h="8" className={p ? c.soft : c.fill} />
                    </g>
                );
            })}
        </g>
    );
}

function Mobile({ c }) {
    return (
        <g>
            <rect x="128" y="40" width="64" height="150" rx="10" className={`${c.paper} stroke-ink/70 dark:stroke-stone-400`} strokeWidth="4" />
            <rect x="136" y="52" width="48" height="18" rx="4" className={c.accent} />
            {[0, 1, 2, 3].map((i) => {
                const y = 78 + i * 22;
                return (
                    <g key={i}>
                        <rect x="136" y={y} width="48" height="16" rx="3" className={c.fill} />
                        <circle cx="144" cy={y + 8} r="3" className={i === 0 ? c.accent : c.line} />
                        <Bar x="151" y={y + 6} w="26" />
                    </g>
                );
            })}
        </g>
    );
}

const KINDS = { chat: Chat, dashboard: Dashboard, flow: Flow, invite: Invite, ledger: Ledger, mobile: Mobile };

export default function ProjectVisual({ kind = "dashboard", tone = "purple", className = "" }) {
    const Kind = KINDS[kind] ?? Dashboard;
    const t = TONES[tone] ?? TONES.purple;
    const c = { ...BASE, accent: t.fill, soft: t.fillSoft, ring: t.stroke };

    return (
        <div aria-hidden="true" className={`overflow-hidden ${t.tint} ${className}`}>
            <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="block h-full w-full">
                <rect x="24" y="20" width="272" height="200" rx="6" className={`${c.paper} ${c.frame}`} />
                <rect x="24" y="34" width="272" height="1" className="fill-ink/10 dark:fill-stone-100/10" />
                <circle cx="35" cy="27" r="2.2" className={c.line} />
                <circle cx="43" cy="27" r="2.2" className={c.line} />
                <circle cx="51" cy="27" r="2.2" className={c.accent} />
                <Kind c={c} />
            </svg>
        </div>
    );
}
