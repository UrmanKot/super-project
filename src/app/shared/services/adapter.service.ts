import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

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

  generateQueryKey(form: FormGroup) {
    let queryKeyString = '';

    for (const key in form.controls) {
      queryKeyString += `${key}:${form.controls[key].value}/`
    }

    return queryKeyString.slice(0, -1);
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

  msToTime(duration: any): string {
    let minutes: any = parseInt(`${(duration / (1000 * 60)) % 60}`, 10);
    let hours: any = parseInt(`${(duration / (1000 * 60 * 60)) % 24}`, 10) + 3;

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;

    return hours + ':' + minutes + ':' + '00';
  }
}
