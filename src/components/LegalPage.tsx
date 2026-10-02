import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LegalPage({ title, children, }: {
    title: string;
    children: ReactNode;
}) {
    return (
        <>
          <Navbar />
          <main className="min-h-[calc(100vh-72px)] bg-paper-soft pt-14 pb-20">
            <div className="mx-auto max-w-[760px] px-6 md:px-10">
               <div className="mb-4 flex items-center gap-3.5">
                 {/* <span className="block h-1 w-11 bg-brand" /> */}
                 <span className="font-mono">
                    Paulreub · Legal
                 </span>
                </div>

                <h1 className="m-0 text-[clamp(30px,4vw,52px)] leading-[1.04] font-extrabold tracking-[-0.025em] text-ink">
                  {title}
                </h1> 

                {/* Thin divider under the title */}
               <div className="mt-8 mb-10 border-t border-line" />

               <div className="flex flex-col text-[16px] leading-[1.7] gap-6 text-ink">
                {children}
               </div>
            </div>
          </main>
          <Footer />
        </>
    )
}