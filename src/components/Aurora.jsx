// Soft, slowly drifting light behind a section. The parent must be `relative isolate overflow-hidden`.
export default function Aurora() {
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="aurora-blob right-[-10%] top-[-14%] h-[28rem] w-[28rem] bg-glow-purple sm:h-[38rem] sm:w-[38rem]" />
            <div className="aurora-blob left-[-16%] top-[32%] h-[20rem] w-[20rem] bg-glow-teal [animation-delay:-8s] sm:h-[28rem] sm:w-[28rem]" />
            <div className="aurora-blob right-[18%] top-[52%] h-[16rem] w-[16rem] bg-glow-pink [animation-delay:-14s] sm:h-[20rem] sm:w-[20rem]" />
        </div>
    );
}
