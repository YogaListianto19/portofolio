// Illustrative UI thumbnails drawn in CSS — used instead of screenshots so that
// client/internal systems are represented without exposing real data.

const ACCENTS = {
    blue: { solid: "bg-blue-500", soft: "bg-blue-500/15", text: "text-blue-500", ring: "ring-blue-500/30" },
    emerald: { solid: "bg-emerald-500", soft: "bg-emerald-500/15", text: "text-emerald-500", ring: "ring-emerald-500/30" },
    rose: { solid: "bg-rose-500", soft: "bg-rose-500/15", text: "text-rose-500", ring: "ring-rose-500/30" },
    amber: { solid: "bg-amber-500", soft: "bg-amber-500/15", text: "text-amber-500", ring: "ring-amber-500/30" },
    violet: { solid: "bg-violet-500", soft: "bg-violet-500/15", text: "text-violet-500", ring: "ring-violet-500/30" },
    cyan: { solid: "bg-cyan-500", soft: "bg-cyan-500/15", text: "text-cyan-500", ring: "ring-cyan-500/30" },
};

const Line = ({ w = "w-full", className = "" }) => (
    <div className={`h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 ${w} ${className}`} />
);

function Chat({ a }) {
    return (
        <div className="flex h-full flex-col gap-2 p-3">
            <div className="max-w-[70%] rounded-xl rounded-tl-sm bg-zinc-200 p-2 dark:bg-zinc-800">
                <Line w="w-24" />
                <Line w="w-16" className="mt-1.5" />
            </div>
            <div className={`ml-auto max-w-[75%] rounded-xl rounded-tr-sm p-2 ${a.soft}`}>
                <div className={`mb-1.5 h-1.5 w-8 rounded-full ${a.solid}`} />
                <Line w="w-28" />
                <Line w="w-20" className="mt-1.5" />
            </div>
            <div className="max-w-[60%] rounded-xl rounded-tl-sm bg-zinc-200 p-2 dark:bg-zinc-800">
                <Line w="w-20" />
            </div>
            <div className="mt-auto flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-2 py-1.5 dark:border-zinc-700 dark:bg-zinc-900">
                <Line w="w-full" />
                <div className={`h-4 w-4 shrink-0 rounded-full ${a.solid}`} />
            </div>
        </div>
    );
}

function Dashboard({ a }) {
    const bars = [40, 65, 50, 80, 58, 92, 70];
    return (
        <div className="flex h-full">
            <div className="w-10 space-y-2 border-r border-zinc-200 p-2 dark:border-zinc-800">
                <div className={`h-4 w-4 rounded ${a.solid}`} />
                {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="h-1.5 w-5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                ))}
            </div>
            <div className="flex-1 p-3">
                <div className="grid grid-cols-3 gap-1.5">
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="rounded-md border border-zinc-200 p-1.5 dark:border-zinc-800">
                            <Line w="w-6" />
                            <div className={`mt-1.5 h-2 w-10 rounded-full ${i === 0 ? a.solid : "bg-zinc-400 dark:bg-zinc-600"}`} />
                        </div>
                    ))}
                </div>
                <div className="mt-3 flex h-16 items-end gap-1.5">
                    {bars.map((h, i) => (
                        <div key={i} className={`flex-1 rounded-t ${i === 5 ? a.solid : "bg-zinc-300 dark:bg-zinc-700"}`} style={{ height: `${h}%` }} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const FlowNode = ({ a, className = "", active }) => (
    <div className={`absolute flex h-7 w-14 items-center gap-1 rounded-md border bg-white px-1.5 dark:bg-zinc-900 ${active ? `border-transparent ring-2 ${a.ring}` : "border-zinc-200 dark:border-zinc-700"} ${className}`}>
        <div className={`h-3 w-3 shrink-0 rounded ${active ? a.solid : "bg-zinc-300 dark:bg-zinc-600"}`} />
        <Line w="w-6" />
    </div>
);

function Flow({ a }) {
    return (
        <div className="relative h-full">
            <svg className="absolute inset-0 h-full w-full text-zinc-300 dark:text-zinc-700" viewBox="0 0 240 150" preserveAspectRatio="none" aria-hidden="true">
                <path d="M62 40 C 90 40, 90 75, 118 75" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M62 110 C 90 110, 90 75, 118 75" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M174 75 C 190 75, 190 40, 200 40" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M174 75 C 190 75, 190 110, 200 110" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <FlowNode a={a} className="left-[4%] top-[18%]" />
            <FlowNode a={a} className="left-[4%] top-[62%]" />
            <FlowNode a={a} className="left-[40%] top-[40%] !w-[4.25rem]" active />
            <FlowNode a={a} className="right-[2%] top-[18%]" />
            <FlowNode a={a} className="right-[2%] top-[62%]" />
        </div>
    );
}

function Invite({ a }) {
    return (
        <div className="grid h-full place-items-center p-3">
            <div className="flex h-full w-28 flex-col items-center justify-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 dark:border-zinc-700 dark:bg-zinc-900">
                <div className={`h-7 w-7 rounded-full ${a.soft} ring-1 ${a.ring}`} />
                <Line w="w-12" />
                <div className={`h-2 w-16 rounded-full ${a.solid}`} />
                <Line w="w-10" />
                <div className="mt-1 grid w-full grid-cols-2 gap-1">
                    <div className="h-3 rounded bg-zinc-200 dark:bg-zinc-800" />
                    <div className={`h-3 rounded ${a.solid}`} />
                </div>
            </div>
        </div>
    );
}

function Ledger({ a }) {
    const rows = [1, 0, 1, 1, 0];
    return (
        <div className="h-full p-3">
            <div className="mb-2 flex items-center justify-between">
                <Line w="w-16" />
                <div className={`h-3 w-10 rounded ${a.solid}`} />
            </div>
            <div className="space-y-1.5">
                {rows.map((paid, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-md border border-zinc-200 px-2 py-1.5 dark:border-zinc-800">
                        <div className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                        <Line w="w-16" />
                        <div className="flex-1" />
                        <div className={`h-2.5 w-9 rounded-full ${paid ? a.soft : "bg-zinc-200 dark:bg-zinc-800"}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function Mobile({ a }) {
    return (
        <div className="grid h-full place-items-center">
            <div className="h-[88%] w-24 rounded-2xl border-4 border-zinc-800 bg-white p-1.5 dark:border-zinc-600 dark:bg-zinc-900">
                <div className={`mb-1.5 h-6 rounded-md ${a.solid}`} />
                <div className="space-y-1">
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-1 rounded bg-zinc-100 p-1 dark:bg-zinc-800">
                            <div className={`h-2.5 w-2.5 rounded-full ${i === 0 ? a.solid : "bg-zinc-300 dark:bg-zinc-600"}`} />
                            <Line w="w-10" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const KINDS = { chat: Chat, dashboard: Dashboard, flow: Flow, invite: Invite, ledger: Ledger, mobile: Mobile };

export default function ProjectVisual({ kind = "dashboard", accent = "blue", className = "" }) {
    const a = ACCENTS[accent] ?? ACCENTS.blue;
    const Kind = KINDS[kind] ?? Dashboard;

    return (
        <div aria-hidden="true" className={`grid-bg relative overflow-hidden bg-zinc-100 dark:bg-zinc-900/60 ${className}`}>
            <div className="absolute inset-x-6 bottom-0 top-6 overflow-hidden rounded-t-xl border border-b-0 border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex items-center gap-1 border-b border-zinc-200 px-2.5 py-1.5 dark:border-zinc-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <span className={`h-1.5 w-1.5 rounded-full ${a.solid}`} />
                </div>
                <div className="h-[calc(100%-1.5rem)]">
                    <Kind a={a} />
                </div>
            </div>
        </div>
    );
}
