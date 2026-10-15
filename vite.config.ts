import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const base = process.env.BASE_PATH || "/";

export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      routes: ["/"],
    },
  },
  nitro: false,
  vite: {
    base,
  },
});
