import { setupWorker } from "msw/browser";

import { env } from "@/env";
import { signInMock } from "./sign-in-mock";

export const worker = setupWorker();

export async function enableMSW() {
  // Se for diferente de test não quero habilitar o service worker e por isso return(retona antes de habilitar: await worker.start(); )
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
