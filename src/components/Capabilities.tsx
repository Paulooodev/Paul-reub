"use client";

import { useRef } from "react";
import Reveal from "./Reveal";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const CAPABILITIES = [
    {
        num: "01",
        title: "Consulting Engineers",
        tag: "Design · Planning · Supervision",
        desc: "From concept through site supervision; structural, civil, and building services engineered so the drawings hold up on the ground.",
        chips: ["Structural & civil design", "Feasibility & planning", "Site supervision"],
        photo: "Engineers reviewing drawings on a building site",
    },
    {
        num: "02",
        title: "Building & Civil Contractors",
        tag: "Buildings · Roads · Infrastructure",
        desc: "Building works and civil construction delivered as one contractor; foundations, structures, and the roads and services that serve them.",
        chips: ["Building construction", "Civil works", "Project execution"],
        photo: "Building frame and civil works under construction",
   },
   {
        num: "03",
        title: "Property Developers",
        tag: "Residential · Commercial · Mixed-use",
        desc: "Land into finished assets; housing, commercial, and mixed-use schemes structured, built, and brought to market.",
        chips: ["Residential & apartments", "Commercial & mixed-use", "Land & joint ventures"],
        photo: "Completed residential or mixed-use development",
   },
];

function StackCard({ capability, index, total, scrollYProgress}:{
    capability: (typeof CAPABILITIES)[number];
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
}) {
    const start = index / total;
    const end = (index + 1) / total;

    const scale = useTransform(scrollYProgress, [start, end], [1, 0.945]);
    const brightness = useTransform(scrollYProgress, [start, end], [1, 0.88]);
    const filter = useTransform(brightness, (b) => `brightness(${b})`);

    return (
        <motion.article
            style={{
                scale,
                filter,
                transformOrigin: "top center",
                top: 96 + index * 68
            }}
            className="sticky mb-6.5 overflow-hidden rounded-[10px] border border-line bg-paper shadow-[0_-1px_0_#E5E5E5,0_26px_60px_-34px_rgba(0,0,0,0.4)]"
        >
         {/* Card header: number, title, tag + yellow edge */} 
         <div className="relative flex h-[68px] items-center justify-between border-b border-line px-7">
            {/* The yellow left edge */}
            <div className="flex items-baseline gap-4.5">
               <span className="font-mono text-sm text-brand-dark">{capability.num}</span>
               <span className="text-xl font-bold text-ink">{capability.title}</span> 
            </div>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:block">{capability.tag}</span>
        </div>  

        {/* Card body: text + image column (stacks on desktop) */}
        <div className="grid min-h-[400px] md:grid-cols-[1.1fr_1fr]">
            {/* Text column */}
          <div className="flex flex-col justify-center px-8 py-10">
            <p className="m-0 text-[clamp(18px,1.7vw,24px)] leading-[1.4] font-medium text-ink">
               {capability.desc} 
            </p>
            <div className="mt-6.5 flex flex-wrap gap-2.5">
                {capability.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-line px-4 py-2 text-[13px] text-muted"
                  >
                    {chip}
                 </span>  
                ))}
            </div>
          </div>  

          {/* Image column — placeholder until real photos arrive. */}
          <div className="relative hidden min-h-[300px] bg-paper-soft md:block">
            <div    
                className="absolute inset-0"
                style={{
                    backgroundImage:
                    "linear-gradient(rgba(112,112,112,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(112,112,112,.18) 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                }}
            />
            <span className="absolute inset-0 flex items-center justify-center px-8 text-center font-mono text-xs uppercase tracking-[0.14em] text-muted">
               {capability.photo} 
            </span>
          </div>
        </div>
        </motion.article>
    )
}

export default function Capabilities(){
    const stackRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
       target: stackRef,
       offset: ["start start", "end end"], 
    });

    return (
        <section id="capabilities" className="bg-paper">
          <div className="mx-auto mb-3 max-w-[1280px] px-6 pt-26 md:px-10">
            <Reveal className="max-w-[720px]">
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-brand-dark">
                Core Capabilities
              </div> 
              <h2 className="m-0 text-[clamp(30px,4vw,52px)] leading-[1.04] font-extrabold tracking-[-0.025em] text-ink">
                Three disciplines. One standard of execution.
              </h2> 
              <p className="mt-5 max-w-[56ch] text-[17px] leading-[1.6] text-muted">
                Consulting engineers, building and civil contractors, and property
                developers; the three capabilities behind every PaulReub project, from
                design through construction to a finished development.
              </p> 
            </Reveal>
          </div>

         {/* The stack itself */} 
        <div className="mx-auto max-w-[1120px] px-6 pb-30 md:px-10">
           <div ref={stackRef}>
             {CAPABILITIES.map((cap, i) => (
                <StackCard
                  key={cap.num}
                  capability={cap}
                  index={i}
                  total={CAPABILITIES.length}
                  scrollYProgress={scrollYProgress}
                />
             ))}
            </div> 
        </div> 
        </section>
    )
}