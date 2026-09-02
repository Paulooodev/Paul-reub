"use client";

import { motion } from "framer-motion";

const EASE = [0.2, 0.7, 0.2, 1] as const

export default function Hero() {
    return (
      <header className="relative flex flex-col justify-center overflow-hidden bg-night pt-[16vh] pb-16 md:flex md:min-h-[92svh] md:items-end md:justify-start md:pt-0 md:pb-[76px]">
        {/* ---- Layer 1: vertical darkening gradient ---- */}
        <div
            style={{
                background:
                    "linear-gradient(180deg, rgba(26,26,26,.5) 0%, rgba(26,26,26,.3) 38%, rgba(26,26,26,.94) 100%)"
            }} 
            className="pointer-events-none absolute inset-0"
        />

        {/* ---- Layer 2: diagonal gradient (dark on the left) ---- */}
        <div
            style={{
                background:
                    "linear-gradient(96deg, rgba(26,26,26,.88) 0%, rgba(26,26,26,.35) 52%, transparent 100%)"
            }} 
            className="pointer-events-none absolute inset-0"
        />

        {/* ---- Layer 3: blueprint grid ---- */}
        <div
            style={{
                backgroundImage:
                    "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
                maskImage: "linear-gradient(180deg, rgba(0,0,0,.6), transparent 65%)",
                WebkitMaskImage:
                    "linear-gradient(180deg, rgba(0,0,0,.6), transparent 65%)",    
            }} 
            className="pointer-events-none absolute inset-0"
        />

        {/* ---- Layer 4: the actual content ---- */}
        <div className="relative w-full max-w-[1280px] mx-auto px-6 pb-[76px] md:px-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
             className="mb-7 flex items-center gap-3.5"
          >
            {/* <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                className="block h-1 w-11 origin-left bg-brand"
            /> */}
            <span className="font-mono text-[12.5px] uppercase tracking-[0.28em] text-brand-light">
                Civil Engineering &amp; Heavy Construction
            </span>
         </motion.div> 

        {/* The headline — staggered in with delay 90ms */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.09, ease: EASE }}
          className="m-0 max-w-[15ch] text-[clamp(36px,6.6vw,96px)] leading-[0.98] font-extrabold tracking-[-0.025em] text-paper"
        >
          Infrastructure engineered to outlast generations.
        </motion.h1>

        {/* The supporting paragraph — delay 210ms */}
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.21, ease: EASE }}
          className="mt-6 max-w-[56ch] text-[clamp(16px,1.35vw,19px)] leading-[1.6] text-white/80"
        >
          For nearly two decades, Paulreub has been working towards
          establishing a reputation as a one stop shop for
          Engineering Construction activities.
          Through a network of Industry Professionals like
          Architects, Engineers, & Quantity Surveyors, we have
          been able to offer quality services to our clients using
          modern engineering techniques and tools.
        </motion.p>

        {/* The two CTAs — delay 330ms */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.33, ease: EASE }}
          className="mt-10 flex flex-wrap gap-3.5"
        >
          <a
            href="#footer"
            className="rounded-md bg-brand px-8 py-4 text-[15px] font-bold text-ink
                       transition-colors hover:bg-brand-dark"
          >
            Request a bid
          </a>
          <a
            href="#projects"
            className="rounded-md border border-white/40 px-8 py-4 text-[15px] font-semibold text-paper
                       transition-colors hover:border-brand hover:text-brand"
          >
            View our projects
          </a>  
        </motion.div>
        </div>
      </header>  
    )
}