import { defineConfig } from "vite"

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  cacheDir: "cacheDir/node_modules/.vite",
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: "./src/main.ts",
      },
    },
  },
})
