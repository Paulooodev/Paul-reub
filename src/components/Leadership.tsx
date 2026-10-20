import Image from "next/image";
import { leaders } from "@/lib/data";
import Reveal from "./Reveal";

export default function Leadership() {
    return (
    <section id="leadership" className="bg-paper">
       <div className="mx-auto max-w-[1280px] px-6 pt-26 pb-28 md:px-10">
          <Reveal className="mb-13 max-w-[760px]">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-brand-dark">
                Leadership
            </div>
            <h2 className="m-0 text-[clamp(30px,4vw,52px)] leading-[1.04] font-extrabold tracking-[-0.025em] text-ink">
                Engineers first. Builders always.
            </h2>
            <p className="mt-5 max-w-[58ch] text-[17px] leading-[1.6] text-muted">
                A COREN-registered leadership bench with decades on the biggest
                jobs in the country; the people who sign the drawings and stand
                on the site.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {leaders.map((leader) => (
                    <LeaderCard key={leader.name} leader={leader} />
                ))}
            </div>
          </Reveal>
        </div> 
    </section>
    )
}


function LeaderCard({ leader }: { leader: (typeof leaders)[number]}) {
    return (
        <article
            className="group overflow-hidden rounded-[10px] border border-line bg-paper
                    shadow-[0_1px_0_#E5E5E5]
                    transition-[border-color,box-shadow,transform] duration-300
                    hover:-translate-y-1 hover:border-brand/40
                    hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative aspect-[4/5] bg-paper-soft">
                    <Image
                       src={leader.image}
                       alt={`${leader.name}, ${leader.role} at Paulreub`}
                       fill
                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                       className="object-cover"
                    />
                  </div> 

          <div className="border-t-[3px] border-brand px-5.5 pt-5.5 pb-6 transition-colors duration-300 group-hover:bg-paper-soft">
            <h3 className="m-0 text-[19px] font-bold tracking-[-0.01em] text-ink">
                {leader.name}
            </h3>
            <div className="mt-1.5 font-mono text-[11.5px] uppercase tracking-[0.1em] text-brand-dark">
                {leader.role}
            </div>
            <p className="mt-3 m-0 text-sm leading-[1.55] text-muted">{leader.bio}</p>
          </div>      
         </article>
    )
}