"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Reveal from "./Reveal";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

const CARD_STEP = 404;

export default function ProjectsCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);
    // The static container
    const containerRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });

    useEffect(() => {
        const measure = () => {
            if(!trackRef.current || !containerRef.current) return;
            const maxDrag = Math.min(0, containerRef.current.clientWidth - trackRef.current.scrollWidth);
            setConstraints({ left: maxDrag, right: 0 });
        };
        measure();
        // Re-measure on resize
        window.addEventListener("resize", measure);
        // when the component unmounts, drop the resize listener so it doesn’t leak.
        return () => window.removeEventListener("resize", measure)
    }, []);

  // Arrow buttons
  // dir +1 = move right
  // dir -1 = move left    
  const nudge = (dir: 1 | -1) => {
    const target = Math.max(
        constraints.left,
        Math.min(constraints.right, x.get() + dir * CARD_STEP)
    );
    animate(x, target, { type: "spring", stiffness: 300, damping: 32 });
  }; 

  return (
    <section id="projects" className="overflow-hidden bg-paper-soft">
        {/*  Section header + controls  */}
        <div className="mx-auto max-w-[1280px] px-6 pt-26 md:px-10">
            <Reveal className="mb-11 flex flex-wrap items-end justify-between gap-8">
               <div className="max-w-[640px]">
                 <div className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-brand-dark">
                   Selected Projects 
                 </div>
                   <h2 className="m-0 text-[clamp(30px,4vw,52px)] leading-[1.04] font-extrabold tracking-[-0.025em] text-ink">
                      Sites we&apos;ve put in the ground.
                    </h2>
                </div> 

               {/* Controls */}
                <div className="flex shrink-0 items-center gap-3">
                   <span className="mr-1.5 hidden font-mono text-[10px] uppercase tracking-[0.12em] text-muted sm:text-[11px]">
                      Drag to explore
                    </span> 
                  <button
                    onClick={() => nudge(1)}
                    aria-label="Previous projects"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-line
                                bg-paper text-lg text-ink transition-colors hover:border-brand hover:text-brand-dark"
                    >
                      <ArrowLeft strokeWidth={1} size={16} />
                   </button>
                    <button
                      onClick={() => nudge(-1)}
                      aria-label="Next projects"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-line
                                bg-paper text-lg text-ink transition-colors hover:border-brand hover:text-brand-dark"
                    >
                      <ArrowRight strokeWidth={1} size={16} />
                    </button>  
                </div>
            </Reveal>
        </div>

       {/* The draggable track */}
        <Reveal className="px-6 md:px-10">
          <div ref={containerRef} className="mx-auto max-w-[1280px] overflow-hidden pb-7">
            <motion.div
               ref={trackRef}
               drag="x" 
               style={{ x }} 
               dragConstraints={constraints}
               dragElastic={0.08}
               whileDrag={{ cursor: "grabbing" }}
               className="flex w-max cursor-grab select-none gap-6"
            >
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </motion.div>
          </div>
        </Reveal> 
    </section>
  );

  function ProjectCard({ project: p }: { project: (typeof projects)[number] }) {
    return (
      <article
        className="group w-[min(380px,82vw)] flex-none overflow-hidden rounded-[10px]
                  border border-line bg-paper shadow-[0_1px_0_#E5E5E5]
                 transition-[border-color,box-shadow] duration-300
                 group-hover:border-brand group-hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)]"
      >
        {/* Image area */}
        <div className="relative h-[262px] bg-paper-soft">
          <Image 
            src={`/projects/${p.id}.jpg`}
            alt={`${p.name} - ${p.cat} project in ${p.city}`}
            fill
            sizes="380px"
            draggable={false}
            className="object-cover"
          />
        {/* Category badge */}  
        <span
          className="pointer-events-none absolute top-3.5 left-3.5 rounded-md border border-brand/50
                    bg-night/60 px-2.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em]
                    text-brand backdrop-blur-[4px]"
          >
            {p.cat}
          </span> 

        {/* Hover stats overlay  */} 
         <div
          className="pointer-events-none absolute inset-0 flex flex-col justify-end p-5.5
                     bg-[linear-gradient(0deg,rgba(26,26,26,0.95),rgba(26,26,26,0.5))]
                     opacity-0 translate-y-3.5 transition-[opacity,transform] duration-350
                     group-hover:translate-y-0 group-hover:opacity-100"
        >
          <StatRow label="Value in place" value={p.v} accent />
          <StatRow label="Duration" value={p.dur}  />
          <StatRow label="Scope" value={p.scope}  />
          </div> 
        </div>

      {/* Card text */}
        <div className="px-5.5 pt-5 pb-6">
          <h3 className="m-0 text-xl tracking-[-0.01em] font-bold text-ink">{p.name}</h3>
          <h4 className="mt-1.75 font-mono text-xs tracking-[0.04em] text-muted">{p.city}</h4>
        </div>
    </article>
    )
  };
}

function StatRow({ label, value, accent = false }: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between border-t border-white/15 py-2.75">
      <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-white/55">
       {label}
      </span>
      <span className={`text-base font-bold ${accent ? "text-brand" : "text-paper"}`}>
        {value}
      </span>
    </div>
  )
}