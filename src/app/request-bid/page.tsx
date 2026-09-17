import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import InfoForm from "@/components/InfoForm";

export const metadata: Metadata = {
  title: "Request a Bid — Paulreub",
  description:
    "Tell us about your project. A member of our estimating team responds within two business days.",
};

export default function RequestBidPage(){
    return (
        <>
        <Navbar />
        <main className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-night pt-14 pb-20">
            <div 
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
                      backgroundSize: "72px 72px",
                      maskImage: "linear-gradient(180deg, rgba(0,0,0,.6), transparent 65%)",
                      WebkitMaskImage:
                        "linear-gradient(180deg, rgba(0,0,0,.6), transparent 65%)",  
                }}
            />
            <div className="relative mx-auto grid max-w-[1120px] items-start gap-14 px-6 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
               {/*  LEFT: the pitch  */} 
               <Reveal>
                 <div className="mb-5 flex items-center gap-3.5">
                    {/* <span className="block h-1 w-11 bg-brand" /> */}
                    {/* <span className="font-mono text-[12.5px] uppercase tracking-[0.28em] text-brand-light">
                        Request a bid
                    </span> */}
                 </div>

                 <h1 className="m-0 max-w-[16ch] text-[clamp(34px,4.5vw,64px)] leading-[1.02] font-extrabold tracking-[-0.02em] text-paper">
                    Let&apos;s build something that lasts.
                </h1>

                 <p className="mt-6 max-w-[48ch] leading-[1.65] text-white/70">
                    Tell us about your project; scope, location, timeline. A member
                    of our estimating team responds within two business days with
                    an initial assessment and next steps.
                </p>

                <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                   <div>Self-performed crews · No subcontracted risk</div>
                   <div>NSE-registered engineering leadership</div>
                   <div>15+ years of heavy civil delivery</div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-8 text-sm text-white/60">
                    <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-light">
                        Prefer to talk?
                    </div>
                    {/* To be changed later on to the real phone number */}
                    <a
                        href="tel:+2348123456789"
                        className="block transition-colors hover:text-brand"
                    >
                        +234 812 345 6789
                    </a>
                    <a
                        href="mailto:info@paulreub.com"
                        className="mt-1 block transition-colors hover:text-brand"
                    >
                        info@paulreub.com
                    </a>
                </div>
               </Reveal>

               {/* RIGHT: the form */}
               <Reveal delay={0.12}>
                    <InfoForm />
                </Reveal>
            </div>

             <div className="relative mx-auto mt-16 max-w-[1120px] px-6 md:px-10">
               <Link
                    href="/"
                    className="font-mono text-xs uppercase tracking-[0.14em] text-white/40 transition-colors hover:text-brand"
                >
                    ← Back to home
                </Link> 
            </div>   
        </main>
        </>
    )
}