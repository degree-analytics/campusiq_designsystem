import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    preset: "src/preset.ts",
  },
  format: ["esm", "cjs"],
  // Disable dts generation to avoid cross-package type conflicts
  // Types can be generated separately with `tsc --emitDeclarationOnly` if needed
  dts: false,
  splitting: true,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "tailwindcss",
    // Optional peer dependencies
    "react-hook-form",
    "@hookform/resolvers",
    "zod",
    "recharts",
    "embla-carousel-react",
    "react-day-picker",
    "date-fns",
  ],
  treeshake: true,
  minify: false,
});
