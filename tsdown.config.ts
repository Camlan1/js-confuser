module.exports = require("tsdown").defineConfig({
  format: ["esm", "cjs"],
  outExtensions({ format }) {
    return { js: format === "es" ? ".mjs" : ".js" }
  },
  outputOptions: {
    exports: "named"
  },
});
