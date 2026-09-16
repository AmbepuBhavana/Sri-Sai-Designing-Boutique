import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "framer-motion": path.resolve(__dirname, "src/lib/motion.tsx"),
      "lucide-react": path.resolve(__dirname, "src/lib/icons.tsx"),
      "react-router-dom": path.resolve(__dirname, "src/lib/router.tsx"),
      "react-hook-form": path.resolve(__dirname, "src/lib/form.ts"),
    },
  },
  build: {
    sourcemap: false,
    cssMinify: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:5050",
    },
  },
});
