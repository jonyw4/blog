module.exports = {
  transform: {
    ".(ts|tsx)": "esbuild-runner/jest",
  },
  setupFiles: ["<rootDir>tests/config.ts"],
};
