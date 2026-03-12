import { fileURLToPath, URL } from "node:url"
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      src: fileURLToPath(new URL("./src", import.meta.url)),
      components: fileURLToPath(new URL("./src/components", import.meta.url)),
      pages: fileURLToPath(new URL("./src/pages", import.meta.url)),
      layouts: fileURLToPath(new URL("./src/layouts", import.meta.url)),
      assets: fileURLToPath(new URL("./src/assets", import.meta.url))
    }
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js"
  }
})
