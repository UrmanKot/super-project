import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdapterService {

  constructor() {
  }

  isValidHttpUrl(string: string): boolean {
    return string.includes('http:') || string.includes('https:');
  }

  downloadFile(filename: string, response: Blob) {
    const dataType = response.type;
    const binaryData = [];
    binaryData.push(response);
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
    downloadLink.setAttribute('download', filename);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }
}
