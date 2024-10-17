module.exports = {
  content: ["*.html", "**/*.html", "*.js", "**/*.js", "*.jsx", "**/*.jsx", "*.ts", "**/*.ts", "*.tsx", "**/*.tsx"],
  css: ["main.purged.css"],
  output: "style.css",
  safelist: [
    /^navbar/,
    /^btn-/,
    // Tambahkan kelas lain yang diperlukan
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
};