export default class Utilities {
  static async downloadFile(fileUrl: string, fileName?: string) {
    const fileContent = await fetch(fileUrl);
    fileName ??= fileUrl;
    const fileContentBlob = await fileContent.blob();
    const downloadFileUrl = window.URL.createObjectURL(fileContentBlob);
    const linkHTMLElement = document.createElement("a");
    linkHTMLElement.href = downloadFileUrl;
    linkHTMLElement.download = fileName;
    linkHTMLElement.click();
  }
}
