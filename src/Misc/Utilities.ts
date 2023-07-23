export interface IDisposable {
  dispose(): void;
}

export default class Utilities {
  static async downloadFile(fileUrl: string, fileName?: string) {
    const fileContent = await fetch(fileUrl);
    fileName ??= fileUrl;
    const fileContentBlob = await fileContent.blob();
    const downloadFileUrl = window.URL.createObjectURL(fileContentBlob);
    const linkHTMLElement = document.createElement("a");
    linkHTMLElement.href = downloadFileUrl;
    linkHTMLElement.download = fileName;
    document.body.appendChild(linkHTMLElement);
    linkHTMLElement.click();
    document.body.removeChild(linkHTMLElement);
  }

  static createGenericDisposable(onDispose: () => void): IDisposable {
    return {
      dispose() {
        onDispose();
      },
    };
  }
}
