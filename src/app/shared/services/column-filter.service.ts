import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColumnFilterService {

  constructor() { }

  getFilterValue(value) {
    switch (value) {
      case null: {
        return 0;
      }
      case '': {
        return 0;
      }
      case true: {
        return 1;
      }
      case false: {
        return 2;
      }
    }
  }
}
