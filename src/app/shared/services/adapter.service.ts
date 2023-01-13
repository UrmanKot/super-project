import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdapterService {

  constructor() {
  }

  removeDuplicates(data: any[], key: any) {
    return [...new Map(data.map(x => [key(x), x])).values()];
  }

  isValidHttpUrl(string: string): boolean {
    return string.includes('http:') || string.includes('https:');
  }

  dateAdapter(date: Date) {
    if (date === null) {
      return null;
    } else {
      return (date.getFullYear() + '-' +
        ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
        ('0' + date.getDate()).slice(-2));
    }
  }

  dateTimeAdapter(date: Date) {
    if (date === null) {
      return null;
    } else {
      return date.toISOString();
    }
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
