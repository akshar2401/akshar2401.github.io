const fileSystem = require("fs");
const path = require("path");
const FallbackFileName = "404.html";

class SetUp404Plugin {
  apply(compiler) {
    compiler.hooks.assetEmitted.tap("SetUp404Plugin", (file, info) => {
      if (typeof file === "string" && file.includes("index.html")) {
        const pathTo404 = path.join(info.outputPath, FallbackFileName);
        fileSystem.writeFileSync(pathTo404, info.content);
      }
    });
  }
}

module.exports = SetUp404Plugin;
