module.exports = {
  content: ["*.html", "**/*.html", "**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
  css: ["style.css"],
  output: "main.purged.css",
  safelist: [
    // Hanya masukkan kelas yang benar-benar digunakan
    /^navbar/,
    /^btn-/,
    // Tambahkan kelas lain yang diperlukan
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};