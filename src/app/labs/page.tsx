import type { Metadata } from "next";
import { LabsPageView } from "@/components/labs/LabsPageView";

export const metadata: Metadata = {
  title: "Nova Labs",
  description:
    "Explore Nova Labs — Alpha, Beta and Experimental projects from the Nova Ecosystem software house.",
  alternates: { canonical: "/labs" },
};

export default function Page() {
  return <LabsPageView />;
}
