import { defineConfig } from "vite"

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      ignored: ["**/src/controller/**", "**/src/routes/**", "./src/app.ts"],
    },
  },
  cacheDir: "cacheDir/node_modules/.vite",
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: "./src/components/main.ts",
        404: "./src/components/404.ts",
      },
    },
  },
})
