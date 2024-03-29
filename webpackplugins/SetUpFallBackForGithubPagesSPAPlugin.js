const fileSystem = require("fs");
const path = require("path");
const FallbackFileName = "404.html";

class SetUpFallBackForGithubPagesSPAPlugin {
  constructor(fallbackFileName = FallbackFileName) {
    this.fallbackFileName = fallbackFileName;
  }

  apply(compiler) {
    compiler.hooks.assetEmitted.tap(
      "SetUpFallBackForGithubPagesSPAPlugin",
      (file, info) => {
        if (typeof file === "string" && file.includes("index.html")) {
          const pathToFallbackFile = path.join(
            info.outputPath,
            this.fallbackFileName
          );
          fileSystem.writeFileSync(pathToFallbackFile, info.content);
        }
      }
    );
  }
}

module.exports = SetUpFallBackForGithubPagesSPAPlugin;
