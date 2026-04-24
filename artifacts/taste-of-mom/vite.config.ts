import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const port = Number(process.env.PORT) || 3000;

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    // Disable Replit plugins for local development
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    sourcemap: true,
  },
  server: {
    port,
    host: "localhost",
    open: true,
    strictPort: false,
  },
  preview: {
    port,
    host: "localhost",
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react/jsx-runtime"],
    exclude: [
      "@replit/vite-plugin-runtime-error-modal",
      "@replit/vite-plugin-cartographer",
      "@replit/vite-plugin-dev-banner",
    ],
  },
});
