const fileSystem = require("fs");
const path = require("path");
const filesNotToScrub = [
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

const scriptsDirPath = path.parse(__dirname);
const rootDir = scriptsDirPath.dir;

const entries = fileSystem.readdirSync(rootDir, {
  withFileTypes: true,
});
let count = 0;
entries.forEach((entry) => {
  if (
    entry.isFile() &&
    !filesNotToScrub.includes(path.parse(entry.name).base)
  ) {
    fileSystem.rmSync(entry.name);
    count++;
  }
});

console.log(`Deleted ${count} build files`);
