import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs", "iife"],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ["openai"],
  target: "esnext",
  outDir: "dist",
  globalName: "vibeIsPositive",
  outExtension(ctx) {
    if (ctx.format === "cjs") return { js: `.cjs` };
    if (ctx.format === "iife") return { js: `.global.js` };
    return { js: `.js` };
  },
})