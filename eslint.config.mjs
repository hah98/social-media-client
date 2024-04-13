import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier";

export default {
  languageOptions: {
    globals: {
      browser: true,
    },
  },
  ...pluginJs.configs.recommended,
  plugins: {
    prettier: pluginPrettier,
  },
  rules: {
    // Prettier rules
    "prettier/prettier": "error",
    // Any additional rules you want to add
  },
};
