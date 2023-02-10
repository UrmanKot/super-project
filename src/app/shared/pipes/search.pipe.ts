import { Pipe, PipeTransform } from '@angular/core';
import {GlossaryItem} from '../../guide/guide-glossary/guide-glossary.component';

@Pipe({
  name: 'glossarySearch'
})
export class SearchPipe implements PipeTransform {

  transform(items: GlossaryItem[], search = ''): GlossaryItem[] {
    if (!search.trim()) {
      return items
    }

    return items.filter(i => i.title.toLowerCase().includes(search.toLowerCase()))
  }

}
