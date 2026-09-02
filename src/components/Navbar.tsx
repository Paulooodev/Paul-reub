"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Projects",     href: "#projects" },
  { label: "Leadership",   href: "#leadership" },
  { label: "Safety",       href: "#ethos" },
  { label: "Company",      href: "#footer" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
     <motion.header
        initial={{ y: -72 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
        className="sticky top-0 z-[60] border-b border-white/10 bg-night"  
     >
       <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-8 px-6 md:px-10">
        {/* Logo — links back to top */}
           <a href="#" className="flex items-center" aria-label="Paulreub home">
            <Image
              src="/logo.png"
              alt="Paulreub logo"
              width={160}
              height={40}
              priority
              className="h-10 w-auto"
            />
           </a>

           {/* Desktop links + CTA (hidden on phones) */}
           <div className="hidden items-center gap-9 md:flex">
             <div className="flex gap-8">
                {LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative inline-block pb-1 text-sm text-white/70
                        transition-colors duration-300 hover:text-brand
                        after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full
                        after:origin-left after:scale-x-0 after:bg-brand
                        after:transition-transform after:duration-500 after:ease-out
                        hover:after:scale-x-100"
                 >
                {link.label}                    
                </a>  
                ))}
             </div>
                <a
                   href="#footer"
                   className="rounded-md bg-brand px-5 py-3 text-sm font-bold text-ink
                    transition-colors hover:bg-brand-dark"
                >
                Request a bid
            </a>
           </div>

        {/* Mobile hamburger */}   
        <button
           onClick={() => setOpen((v) => !v)} 
           aria-label="Toggle menu"
           aria-expanded={open} 
           className="text-2xl leading-none text-paper md:hidden"
        >
           {open ? "✕" : "☰"} 
        </button>
        </nav> 

      {/* Mobile dropdown */}  
      <AnimatePresence>
        {open && (
          <motion.div
             initial={{ height: 0, opacity: 0}}
             animate={{ height: "auto", opacity: 1 }}
             exit={{ height: 0, opacity: 0 }}
             transition={{ duration: 0.35, ease: "easeInOut" }}
             className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
               {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm text-white/70 hover:text-brand"
                >
                    {link.label}
                </a>
               ))}
                <a
                  href="#footer"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-md bg-brand px-3 py-3 text-center text-sm font-bold text-ink"
                >
                Request a bid
              </a>
            </div>
          </motion.div>  
        )}
      </AnimatePresence>
     </motion.header>   
    )
}