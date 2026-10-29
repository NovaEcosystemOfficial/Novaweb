import type { Metadata } from "next";
import { DeleteDataPage } from "@/components/legal/DeleteDataPage";

export const metadata: Metadata = {
  title: "Data Deletion Request",
  description:
    "Request deletion of data associated with GTC Promo or GLITCH. Send your request by email and we will process it within 30 days.",
  openGraph: {
    type: "website",
    title: "Data Deletion Request · GLITCH",
    description:
      "Request deletion of data associated with GTC Promo or GLITCH.",
    siteName: "GLITCH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Deletion Request · GLITCH",
    description:
      "Request deletion of data associated with GTC Promo or GLITCH.",
  },
  alternates: {
    canonical: "/delete-data",
  },
};

export default function Page() {
  return <DeleteDataPage />;
}
