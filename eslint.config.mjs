import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"), // Add TypeScript support
  {
    ignores: ["node_modules", ".next", "out"],
    files: ["**/*.ts", "**/*.tsx"], // Apply to TypeScript files
    languageOptions: {
      parser: typescriptParser, // Use the TypeScript parser
      parserOptions: {
        project: "./tsconfig.json", // Point to your tsconfig.json
        tsconfigRootDir: __dirname, // Use the directory of the config file
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin, // Add TypeScript plugin
    },
    rules: {
      // Add TypeScript-specific rules here
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];

export default eslintConfig;
