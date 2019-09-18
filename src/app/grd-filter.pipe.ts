import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grdFilter'
})
export class GrdFilterPipe implements PipeTransform {

  transform(items: any, filter: any, isAnd: boolean): any {
    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);
      if (isAnd) {
        return items.filter(item =>
            filterKeys.reduce((memo, keyName) =>
                (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
      } else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            console.log(keyName);
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === "";
          });
        });
      }
    } else {
      return items;
    }
  }
  // transform(items: any,task: string, parentTask: string, filter: any, defaultFilter: boolean): any {
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
}