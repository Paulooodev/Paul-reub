import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
   title: "Privacy Policy — Paulreub",
   description: "How Paulreub handles information shared through this website.", 
}

export default function PrivacyPage(){
    return (
        <LegalPage title="Privacy Policy">
           <UnderConstruction />
        </LegalPage>
    )
}