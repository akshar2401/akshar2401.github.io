export default class Utilities {
  static async downloadFile(fileUrl: string) {
    const fileContent = await fetch(fileUrl);
    const fileContentBlob = await fileContent.blob();
    const downloadFileUrl = window.URL.createObjectURL(fileContentBlob);
    const linkHTMLElement = document.createElement("a");
    linkHTMLElement.href = downloadFileUrl;
    linkHTMLElement.download = "Resume.pdf";
    linkHTMLElement.click();
    document.removeChild(linkHTMLElement);
  }
}
