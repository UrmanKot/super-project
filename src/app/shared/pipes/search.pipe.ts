import { Pipe, PipeTransform } from '@angular/core';
import {GlossaryItem} from '../../guide/guide-glossary/guide-glossary.component';
import {GuideMapItem} from "../../guide/guide-map/guide-map.component";

@Pipe({
  name: 'glossarySearch'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], search = ''): any[]  {
    if (!search.trim()) {
      return items
    }

    return items.filter(i => i.title.toLowerCase().includes(search.toLowerCase()))
  }

}
