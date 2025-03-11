import path from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig, UserConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "a-vitest-plugin-that-changes-config",
      config: () => ({
        test: {
          setupFiles: [
            "./setupFiles/add-something-to-global.ts",
            "setupFiles/without-relative-path-prefix.ts",
          ],
        },
      }),
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globalSetup: [
      "./globalSetup/default-export.js",
      "./globalSetup/named-exports.js",
      "./globalSetup/ts-with-imports.ts",
      "./globalSetup/another-vite-instance.ts",
    ],
    globals: true,
    setupFiles: ["./test/setup.ts"],
    environment: "happy-dom",
  },
} as UserConfig & {
  test: {
    globals: true;
  };
});
