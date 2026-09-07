import Image from "next/image";
import Reveal from "./Reveal";

export default function Footer() {
    return (
        <footer id="footer" className="bg-night text-paper">
            <div className="mx-auto max-w-[1280px] px-6 pt-25 md:px-10">
               {/* TOP: headline + bid form */} 
               <div className="grid gap-12 border-b border-white/10 pb-18 md:grid-cols-2 md:gap-16">
                    <Reveal>
                       <h2 className="m-0 max-w-[16ch] text-[clamp(36px,5.4vw,80px)] leading-[0.98] font-extrabold tracking-[-0.03em] text-brand">
                          Let&apos;s build something that lasts.
                        </h2>
                        <p className="mt-6 max-w-[48ch] leading-[1.65] text-white/60">
                            Tell us about your project — a member of our estimating team
                            responds within two business days.
                        </p> 
                    </Reveal>
                    {/* <Reveal delay={0.15}>
                        <BidForm />
                    </Reveal> */}
               </div>

            {/*  MIDDLE: link columns  */} 
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
             {/* Brand column  */}     
              <div>
                <div className="mb-4.5 flex items-center">
                    <Image
                       src="/logo.png"
                       alt="Paulreub logo"
                       width={160}
                       height={40}
                       className="h-18 w-auto"
                    />
                </div>
              </div> 

               {/* Capabilities column */}
                <div>
                    <FooterHeading>Company</FooterHeading>
                    <FooterColumn>
                        <FooterLink href="#ethos">Safety</FooterLink>
                        <FooterLink href="#projects">Projects</FooterLink>
                        <FooterLink href="#">Careers</FooterLink>
                        <FooterLink href="#leadership">Leadership</FooterLink>
                    </FooterColumn>
                </div>  

            {/* Contact column */}
              <div>
                <FooterHeading>Contact</FooterHeading>
                <div className="flex flex-col gap-3 text-sm text-white/60">
                   <span>
                       1, Kadiri Street
                       <br />
                        Ogba, Lagos
                    </span>

                    <FooterLink href="tel:+2348123456789">+234 812 345 6789</FooterLink>
                    <FooterLink href="mailto:bids@paulreub.ng">bids@paulreub.com</FooterLink>    
                </div>
              </div>  
            </div>
            {/* BOTTOM: legal strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6.5 pb-9">
               <span className="font-mono text-xs text-white/40">
                 © 2008–2026 Paulreub · All rights reserved       
               </span>
               <div className="flex gap-6.5">
                  <FooterLink href="#" small>Privacy</FooterLink>
                  <FooterLink href="#" small>Terms</FooterLink>
                  <FooterLink href="#" small>Prequalification</FooterLink>
               </div>
            </div>
            </div>
        </footer>
    )
}


function FooterHeading({ children }: { children: React.ReactNode }) {
    return (
       <div className="mb-4.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-light">
        {children}
       </div> 
    );
}

function FooterColumn({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-3">{children}</div>;
}

function FooterLink({
    href,
    children,
    small = false,
}: {
    href: string;
    children: React.ReactNode
    small?: boolean;
}){
    return (
    <a
      href={href}
      className={`text-white/60 transition-colors hover:text-brand ${small ? "text-[12.5px]" : "text-sm"}`}
    >
      {children}
    </a> 
    )
}