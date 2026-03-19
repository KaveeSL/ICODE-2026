import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  // Helps when deploying to a subfolder (e.g. InfinityFree paths).
  // Use with a fresh `npm run build`.
  base: "./",
  plugins: [react()]
});

