import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class Sort implements PipeTransform {
  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
  //   console.log(task);
  //   console.log(parentTask);
  //   if (!filter){
  //     return items;
  //   }

  //   if (!Array.isArray(items)){
  //     return items;
  //   }

  //   if (filter && Array.isArray(items)) {
  //     let filterKeys = Object.keys(filter);

  //     if (defaultFilter) {
  //       return items.filter(item =>
  //           filterKeys.reduce((x, keyName) =>
  //               (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
  //     }
  //     else {
  //       return items.filter(item => {
  //         return filterKeys.some((keyName) => {
  //           return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
  //         });
  //       });
  //     }
  //   }
  // }
//   transform(items: any, task: string, parentTask: string, priority: string){
//     if (items && items.length){
//         return items.filter(item =>{
//             if (task && item.task.toLowerCase().indexOf(task.toLowerCase()) === -1){
//                 return false;
//             }
//             if (parentTask && item.parentTask.toLowerCase().indexOf(parentTask.toLowerCase()) === -1){
//                 return false;
//             }
           
//             return true;
//        })
//     }
//     else{
//         return items;
//     }
// }
