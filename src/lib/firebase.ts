import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

/**
 * Nova Ecosystem Firebase project (NovaCloud).
 * Same project used by NovaDocs NovaDrop / Firebase Storage.
 * Values can be overridden via NEXT_PUBLIC_FIREBASE_* env vars.
 */
const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ??
    "AIzaSyBcz9cKb3rtqw2WlxU3SSy89Lp1Z3CnKKE",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ??
    "novacloud-2dd72.firebaseapp.com",
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "novacloud-2dd72",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ??
    "novacloud-2dd72.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "807373211833",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ??
    "1:807373211833:web:05ff2501c813b0e4897368",
  measurementId:
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? "G-C1TKN16P9G",
};

let app: FirebaseApp | undefined;
let db: Firestore | undefined;

export function getFirebaseApp(): FirebaseApp | null {
  if (typeof window === "undefined") return null;

  if (!app) {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  }

  return app;
}

/** Shared Firestore instance for NovaWeb analytics. */
export function getFirestoreDb(): Firestore | null {
  const firebaseApp = getFirebaseApp();
  if (!firebaseApp) return null;

  if (!db) {
    db = getFirestore(firebaseApp);
  }

  return db;
}
