"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

const STATS = [
  { value: 15,    suffix: "+",    label: "Years in operation" },
  { value: 100,  suffix: "+",    label: "Projects delivered" },
  { value: 300,   prefix: "₦", suffix: "M", label: "Value put in place" },
  { value: 4.2,   suffix: "M",    label: "Safe man-hours logged" },
];

function CountUp({ value, prefix = "", suffix = "" }: {
    value: number;
    prefix?: string;
    suffix?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

    useEffect(() => {
       if (!inView || !ref.current) return;
       const controls = animate(0, value, {
        duration: 1.2,
        ease: [0.2, 0.7, 0.2, 1],
        onUpdate: (latest) => {
            if(ref.current){
                // Show decimals only for non-integers (1.4T), else whole numbers
                ref.current.textContent = `${prefix}${latest.toFixed(value % 1 === 0 ? 0 : 1)}${suffix}`
            }
        }
       });
       // cleanup if component unmounts mid-count
       return () => controls.stop(); 
    }, [inView, value, prefix, suffix]);

    return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

export default function StatsBar(){
    return (
           <section className="border-t-[3px] border-brand bg-night">
            <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-6 py-9 md:grid-cols-4 md:px-10">
                {STATS.map((stat) => (
                   <div key={stat.label}>
                     {/* Big yellow number */}
                    <div className="text-[clamp(30px,3vw,44px)] font-extrabold leading-none tracking-[-0.02em] text-brand">
                        <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                    {/* Small grey label */}
                    <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
                        {stat.label}
                    </div>
                   </div> 
                ))}
            </div>
           </section>
    )
}