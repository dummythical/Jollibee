import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // This allows access from any device in the same network
    port: 5173,
  },
  plugins: [react()],
});
