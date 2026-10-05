import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Prequalification — Paulreub",
  description:
    "Company registration, certifications, and capacity summary for public and private sector prequalification.",
};

export default function PrequalificationPage(){
    return(
        <LegalPage title="Prequalification">
           <p className="m-0">
                Paulreub maintains a complete prequalification dossier for public and
                private sector clients, covering legal registration, COREN
                credentials, certifications, plant and equipment, financial
                capacity, safety record, and reference projects.     
           </p> 
            <p className="m-0">
               To request the full dossier, contact{" "} 
               <a
                  href="mailto:info@paulreub.com"
                  className="text-brand-dark underline decoration-brand/50 underline-offset-4 hover:text-brand"
                >
                 info@paulreub.com
                </a>
                .
            </p>
            <UnderConstruction />
        </LegalPage>
    );
}