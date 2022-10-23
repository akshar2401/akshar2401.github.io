const fileSystem = require("fs");
const path = require("path");

const defaultFilesNotToScrub = [
  ".gitignore",
  "Resume.pdf",
  "template.html",
  "tsconfig.json",
  "webpack.config.js",
  "yarn.lock",
  "package.json",
  ".git",
  ".DS_Store",
];

class ScrubOldBuildFilesPlugin {
  constructor(filesNotToScrub = defaultFilesNotToScrub) {
    this.filesNotToScrub = filesNotToScrub;
  }
  apply(compiler) {
    compiler.hooks.beforeRun.tap("ScrubOldBuildFilesPlugin", (_) => {
      const scriptsDirPath = path.parse(__dirname);
      const rootDir = scriptsDirPath.dir;

      const entries = fileSystem.readdirSync(rootDir, {
        withFileTypes: true,
      });
      let count = 0;
      entries.forEach((entry) => {
        if (
          entry.isFile() &&
          !this.filesNotToScrub.includes(path.parse(entry.name).base)
        ) {
          fileSystem.rmSync(entry.name);
          count++;
        }
      });

      console.log(`Deleted ${count} build files`);
    });
  }
}

module.exports = ScrubOldBuildFilesPlugin;
