import Reveal from "./Reveal";

export default function Ethos(){
    return (
      <section id="ethos" className="bg-paper-soft">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-26 md:grid-cols-[280px_1fr] md:gap-14 md:px-10">
            <Reveal>
               {/* <span className="mb-4.5 block h-1 w-11 bg-brand" /> */}
               <div className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                   Our ethos 
                </div> 
                <div className="mt-2.5 tracking-[0.06em] text-muted font-mono text-xs">
                  Safety · Legacy · Precision
                </div>
            </Reveal>

            {/*  The big quote  */}
            <Reveal delay={0.12}>
               <h2 className="m-0 text-[clamp(24px,3vw,40px)] leading-[1.25] font-semibold tracking-[-0.01em] text-ink">
                  Safety is not a program, it is the standard we build to. Every
                  crew goes home. Every structure endures. Fifteen years of {""}
                  <span className="shadow-[inset_0_-12px_0_#D4D84A]">legacy </span>
                  held to the tolerance of a single millimeter.
                </h2> 
            </Reveal>
        </div>
      </section>  
    )
}