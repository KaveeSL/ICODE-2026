import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  // Absolute base so nested routes like /programme/day1 load assets correctly on refresh.
  // Relative "./" breaks JS/CSS paths on multi-segment URLs after host deploy.
  base: "/",
  plugins: [react()],
  assetsInclude: ["**/*.pptx", "**/*.docx", "**/*.pdf"],
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: ["**/node_modules/**", "**/dist/**", "**/dist.zip"],
    },
  },
});
