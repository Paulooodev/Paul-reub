import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata: Metadata = {
  title: "Terms of Service — Paulreub",
  description: "Terms governing use of the Paulreub website.",
};

export default function TermsPage(){
    return(
        <LegalPage title="Terms of Service">
            <UnderConstruction />
        </LegalPage>
    )
}