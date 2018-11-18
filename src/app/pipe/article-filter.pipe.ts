import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

  transform(value: any, limit: number = 20, search: string = null): any {
    let list = value;

    if (search != null) {
      list = list.filter((item) => {
        return item.title.indexOf(search) === 0;
      })
    }

      list = list.splice(0, limit);
    return list;
  }

}
