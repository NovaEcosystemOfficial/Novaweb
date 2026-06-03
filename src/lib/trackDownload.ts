import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getFirestoreDb } from "./firebase";

export type DownloadProduct = "NovaDocs" | "NovaMobile";

export async function trackDownload({
  product,
  version,
}: {
  product: DownloadProduct;
  version: string;
}): Promise<void> {
  const db = getFirestoreDb();
  if (!db) return;

  try {
    await addDoc(collection(db, "downloads"), {
      product,
      version,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Failed to track download:", error);
  }
}
