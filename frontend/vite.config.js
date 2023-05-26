import { defineConfig } from "vite"

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  cacheDir: "cacheDir/node_modules/.vite",
  build: {
    rollupOptions: {
      input: {
        main: "./src/main.ts",
      },
    },
  },
})
