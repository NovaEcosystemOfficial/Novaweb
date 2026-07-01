import type { Metadata } from "next";
import { DownloadsPageView } from "@/components/downloads/DownloadsPageView";

export const metadata: Metadata = {
  title: "Download Center",
  description:
    "Download Nova Ecosystem software — NovaDocs, NovaMobile and all available builds in one place.",
  alternates: { canonical: "/downloads" },
};

export default function Page() {
  return <DownloadsPageView />;
}
