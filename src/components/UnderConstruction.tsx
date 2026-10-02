export default function UnderConstruction(){
    return (
       <div className="rounded-[10px] border border-line bg-paper p-8 shadow-[0_1px_0_#E5E5E5] md:p-10">
        <div className="mb-5 flex items-center gap-3">
           <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand/10 text-brand-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22" height="22" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1Z" />
                <path d="M4 10V8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" />
                <path d="M12 10V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                <path d="M4 10h16" />
              </svg>
           </span> 
           <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-dark">
             Under construction
           </span>
        </div>

        <p className="m-0 text-ink">
            This document is being prepared and will be published shortly. It
            will set out Paulreub&apos;s position in full.  
        </p>

        <p className="m-0 text-muted text-sm">
            In the meantime, for any questions regarding this document, contact
            us directly at{" "}
            <a href="mailto:info@paulreub.com" className="text-brand-dark decoration-brand/50 hover:text-brand underline underline-offset-4">info@paulreub.com</a>
            .
        </p>
       </div> 
    )
}