import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/web-dev-tools",
  plugins: [react()],
  server: {
    port: 7880,
  },
});
