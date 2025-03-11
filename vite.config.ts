import path from "node:path";

import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";
import { defineConfig } from "vite";
import { InlineConfig } from "vite/node";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    // setupFiles: ['./test/setup.ts'],
    // environment: 'happy-dom',
  },
} as UserConfig & {
  test: InlineConfig;
});

// import path from "node:path";
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// /// <reference types="vitest/config" />
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });
