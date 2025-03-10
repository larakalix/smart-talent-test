import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vercel from 'vite-plugin-vercel';
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), vercel()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
