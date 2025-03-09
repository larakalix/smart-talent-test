import { defineConfig } from "tsup";

export default defineConfig((options) => ({
    entryPoints: ["src/components/index.tsx", "src/lib/utils.ts"],
    format: ["cjs", "esm"],
    dts: true,
    external: ["react"],
    ...options,
}));
