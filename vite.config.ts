import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  // Helps when deploying to a subfolder (e.g. InfinityFree paths).
  // Use with a fresh `npm run build`.
  base: "./",
  plugins: [react()],
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

