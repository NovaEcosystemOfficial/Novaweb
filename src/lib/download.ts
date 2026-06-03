import type { MouseEvent } from "react";
import { trackDownload, type DownloadProduct } from "./trackDownload";

type ProductDownloadOptions = {
  product: DownloadProduct;
  version: string;
  url: string;
  fileName?: string;
};

function startDownload(url: string, fileName?: string) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  if (fileName) {
    link.setAttribute("download", fileName);
  }
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/** Track the download in Firestore, then trigger the existing file download flow. */
export async function handleProductDownload(
  event: MouseEvent<HTMLElement>,
  options: ProductDownloadOptions
) {
  event.preventDefault();
  await trackDownload({
    product: options.product,
    version: options.version,
  });
  startDownload(options.url, options.fileName);
}
