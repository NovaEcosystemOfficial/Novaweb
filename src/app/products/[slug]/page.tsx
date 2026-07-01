import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PRODUCT_SLUGS,
  isProductSlug,
  type ProductSlug,
} from "@/lib/ecosystem";
import { getProductCopy } from "@/lib/ecosystem-i18n";
import { ProductPageView } from "@/components/products/ProductPageView";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isProductSlug(slug)) return { title: "Product" };
  const copy = getProductCopy("en", slug);
  return {
    title: copy.name,
    description: copy.description,
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!isProductSlug(slug)) notFound();
  return <ProductPageView slug={slug as ProductSlug} />;
}
