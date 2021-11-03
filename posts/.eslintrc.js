module.exports = {
  extends: ["plugin:md/recommended"],
  rules: {
    "md/remark": [
      "error"
    ],
  },
  overrides: [
    {
      files: ["*.md"],
      parser: "markdown-eslint-parser",
    },
  ],
};