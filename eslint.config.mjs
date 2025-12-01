import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js,
      "var-length": varLength, },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "no-alert": "error",   // ← ★ 追加ここだけ
      "var-length/length": ["error", { max: 12 }],
    },
  },
]);
