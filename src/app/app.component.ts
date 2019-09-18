import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MatTabChangeEvent } from '@angular/material';
import {MatDialog} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material';
interface Dataa {
  task: string;
  parentTask: string;
  priority: string;
  startDate: string;
  endDate: string;
  endFlag: string;
   }

import { Inject } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  buttonDisabled: boolean;
  myModel: any;
  currentLesson:string;
  words2 = [];
  value2=[];
  date2=[];
  start1=[];
  start2=[];
  flag2=[];
  term: string;
  term1:string;
  term_parent:string;
  term_priorityfrom:string;
  term_priorityto:string;
  term_start:string;
  term_end:string;
  query:string;
  TaskVal:string;
taskVar:any;
startDate:any;
endDate:any;
parentName:any;
isDisabled:boolean;
buttondis :boolean;
task:any ;
taskarray=[];
filterBy: string = "";
searchFindLoopForLocation;
public filterData:any={};
public searchText : string;
public customerData : any;
public dataa: Dataa[];

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {

    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
    if( tabChangeEvent.index ==1)
    {
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
      const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders (headerDict), 
      };
      this.http.get('http://localhost:2222/TaskManager/getTask'  , {
        headers:
          new HttpHeaders(
            {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Access-Control-Allow-Headers': 'Content-Type',             // This is empty
            }
          )
      }).subscribe((res)=>{
        this.dataa = res as Dataa[];
      
       // console.log(JSON.stringify(res).length+"sadasdsadsad");
        //let list: string[] = [];
      //   JSON.stringify(res).forEach(element => {
      //     list.push(element.Id);
      // });

          this.words2.length=0;
          this.value2.length=0;
         this.date2.length=0;
         this.start1.length=0;
         this.start2.length=0;
         this.flag2.length=0;
       
        var count = Object.keys(res).length;
       // console.log(count);
        for(var i=0;i<count;i++)
        {
          if(i==1)
          {
            this.isDisabled=true;
          }
           this.task = res[i];
         console.log(this.task["endFlag"]+"thi");
          this.words2.push({value:this.task["task"]});
          this.searchText =this.words2[i];
          this.value2.push({value:this.task["parentTask"]});
         this.date2.push({value:this.task["priority"]});
         this.start1.push({value:this.task["startDate"]});
         this.start2.push({value:this.task["endDate"]});
         this.flag2.push({value:this.task["endFlag"]});
         this.buttondis=false;
        
        // if(task["endFlag"]=="0")
         //{
         // this.currentLesson= '0'
         //this.buttonDisabled = false;
         //}
         //else
         //{
          //this.buttonDisabled = true;
          //console.log("one");
         //}
        // this.end1.push({value:task["endDate"]});
        }
 
 
     
    });
      
    }
  }
  onSelectChange(event:any) {
    if(event.index== 1){
      console.log('Tab1 is selected!');

      this.http.get('http://localhost:2222/TaskManager/getTask').subscribe((res)=>{
        console.log(res);
    });

      
    }else{
      console.log('Tab1 is not selected!')



    }
  }
  getdataa(task:string){
   
    var skinName = this.dataa.find(x=>x.task == task).parentTask;
    console.log(skinName)
  }
  constructor(private http: HttpClient,public dialog: MatDialog)
  {
    this.myModel = 'Jose';
  }
  str: string;
  title = 'taskmanager';
  value = "";
  msg = 'Hello World';
  filter(value) {
    this.filterBy = value;
    this.searchFindLoopForLocation = this.searchFindLoopForLocation.filter(obj => obj.name == value);
}
  openDialog(index:any) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog ,{
    //   this.words2.push({value:task["task"]});
    //   this.value2.push({value:task["parentTask"]});
    //  this.date2.push({value:task["priority"]});
    //  this.start1.push({value:task["startDate"]});
    //  this.start2.push({value:task["endDate"]});
    //  this.flag2.push({value:task["endFlag"]});
      width: '500px',data: {
        task:this.words2[index].value,
        parentTask:this.value2[index].value,
        priority:this.date2[index].value,
        startDate:this.start1[index].value,
        endDate:this.start2[index].value,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  myFunc(taskname:string,parentname:string,startdate:string,enddate:string){
  //  console.log(taskname);
   // console.log(this.value);
    //console.log(parentname);
    //console.log(startdate);
   // console.log(enddate);

    let fd = new FormData();
    fd.append("task", taskname);
    fd.append("parentTask",parentname);
    fd.append("priority",this.value);
    fd.append("startDate",startdate);
    fd.append("endDate",enddate);
    fd.append("endFlag","0");

    // this.http.get("http://jsonplaceholder.typicode.com/users").
    // subscribe((data) ⇒ console.log(data))
   this.http.post("http://localhost:2222/TaskManager/addTask", fd).subscribe((r) => 
   {

console.log(r+"asdsd");
    let response = r;
    if(response["task"].length>0)
    {
      alert("Task added successfully :) ");

    }
  
    // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
     //console.error("Response " + r);
    
     }, (error) => {
         //console.error("Response " + error.json());
        alert("Error in inserting Task!!!! ");
     });
  }

  onClick(event:MatTabChangeEvent)
{

  console.log(event.index);
  this.str="sad";
}

  
add() {
  this.words2.push({value: 'gsre'});
}
  pitch(event: any) {
    console.log(event.value);
    this.value = event.value;
  }
  checkCurrentLession(value :any)
  {
console.log(value);

  }
 
  reset(){
this.taskVar="";
this.value="";
this.startDate="";
this.parentName="";
this.endDate="";

console.log('Tab1 is selected!');
  }
end(index:any)
{
console.log(this.words2[index].value);
console.log(this.value2[index].value);
console.log(this.date2[index].value);
console.log(this.start1[index].value);
console.log(this.start2[index].value);
console.log(this.flag2[index].value);
let fd = new FormData();
    fd.append("task", this.words2[index].value);
    fd.append("parentTask",this.value2[index].value);
    fd.append("priority",this.date2[index].value);
    fd.append("startDate",this.start1[index].value);
    fd.append("endDate",this.start2[index].value);
    fd.append("endFlag","1");
    this.http.post("http://localhost:2222/TaskManager/updateTask", fd).subscribe((r) => 
    {
      window.location.reload();
 console.log(r+"asdsd");
     let response = r;
     if(response["task"].length>0)
     {
       alert("Task Updated successfully :) ");
 
     }
   
     // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
      //console.error("Response " + r);
     
      }, (error) => {
          //console.error("Response " + error.json());
         alert("Error in inserting Task!!!! ");
      });
// this.words2.push({value:task["task"]});
// this.value2.push({value:task["parentTask"]});
// this.date2.push({value:task["priority"]});
// this.start1.push({value:task["startDate"]});
// this.start2.push({value:task["endDate"]});
// this.flag2.push({value:task["endFlag"]});
}

// searchTask(term: string) {
//   console.log(this.task)
//   console.log(this.myModel)
//   if(!term) {
//     this.task = this.task;
//   } else {
//     this.task = this.task.filter(x => 
//        x.task.trim().toLowerCase().includes(term.trim().toLowerCase()) 
      
//     );
//   }
// }
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {

  taskVal:any;
patentTaskval:any;
priorityval:any;
startDateval:any;
endDateval:any;
value:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
 ,private http: HttpClient) { }
 
 ngOnInit() {
   // will log the entire data object
   //console.log(this.data.task)
   this.taskVal = this.data.task;
   //console.log(this.data.parentTask)
   this.patentTaskval = this.data.parentTask;
   //console.log(this.data.priority)
   this.priorityval = this.data.priority;
  // console.log(this.data.startDate)
   this.startDateval = this.data.startDate;
   //console.log(this.data.endDate)
   this.endDateval = this.data.endDate;
 }
 pitch(event: any) {
  console.log(event.value);
  this.value = event.value;
}
 update(taskname:string,parentname:string,startdate:string,enddate:string)
 {

  console.log(taskname+"testtttt");
  console.log(parentname+"testtttt");
  console.log(this.value+"testtttt");
  console.log(startdate+"testtttt");
  console.log(enddate+"testtttt");
  let fd = new FormData();
  fd.append("task", taskname);
  fd.append("parentTask",parentname);
  fd.append("priority",this.value);
  fd.append("startDate",startdate);
  fd.append("endDate",enddate);
  fd.append("endFlag","0");
  this.http.post("http://localhost:2222/TaskManager/updateExistingTask", fd).subscribe((r) => 
  {
    //window.location.reload();
console.log(r+"asdsd");
   let response = r;
   if(response["task"].length>0)
   {
     alert("Task Updated successfully :) ");
     window.location.reload();

   }
 
   // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
    //console.error("Response " + r);
   
    }, (error) => {
        //console.error("Response " + error.json());
       alert("Error in inserting Task!!!! ");
    });

 }



}