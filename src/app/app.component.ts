import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTabChangeEvent } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
interface Dataa {
  task: string;
  parentTask: string;
  priority: string;
  startDate: string;
  endDate: string;
  endFlag: string;
}

interface TaskData {
  task: any;
  endFlag: any;
  taskid: any;
  projectid: any;
  priority: any;
  parentTask: any;
  startDate: any;
  endDate: any;
}
interface ProjectData {
  projectId: any;
  project: any;
  endDate: any;
  priority: any;
  isCompleted: any;
  count: any;
  startDate: any;
}
interface UserData {
  userid: any;
  firstname: any;
  lastname: any;
  employeeid: any;
  projectid: any;
  task_id: any;
}
import { Inject } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myControl = new FormControl();
  buttonDisabled: boolean;
  myModel: any;
  currentLesson: string;
  words2 = [];
  value2 = [];
  date2 = [];
  options: string[];
  minDateStart: any;
  start1 = [];
  start2 = [];
  startingDate:any;
  flag2 = [];
  term: string;
  managerVariable:any;
  addbuttonname: any;
  term1: string;
  term_parent: string;
  proname: any;
  servar: any;
  startDateVariable: string;
  //today's date
  date:any;
  date1:any;
  todaydate: any;
  isValidDate:any;
  projectVal: any;
  //any date
  someDate: Date = new Date();
  term_priorityfrom: string;
  term_priorityto: string;
  term_start: string;
  term_end: string;
  query: string;
  TaskVal: string;
  theCheckbox: boolean;
  taskVar: any;
  startDate: any;
  endDate: any;
  parentName: any;
  isDisabled: boolean;
  buttondis: boolean;
  task: any;
  taskarray = [];
  filterBy: string = "";
  searchFindLoopForLocation;
  public filterData: any = {};
  public searchText: string;
  public customerData: any;
  public dataa: Dataa[];
  public user_data: UserData[];
  public project_data: ProjectData[];
  public user_data_for_view_task: UserData[];
  public task_data_task_view: TaskData[];
  error:any={isError:false,errorMessage:''};
  userfirstnameval :any;
  userlastnameval:any;
   userempidval:any;

  taskVariable: any;
  parentVariable: any;



  projectvariable:any;


  public task_data: TaskData[];




  addTaskUser:any;
 
  value:any;
 
  ProjecttaskVariable:any;
  

  projectnametemp: any;
  
 
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {

    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);


    if (tabChangeEvent.index == 0) {


    }
    if (tabChangeEvent.index == 1) 
    {
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
      const requestOptions = {
        headers: new HttpHeaders(headerDict),
      };
      this.http.get('http://localhost:2222/TaskManager/getTask',
        {
          headers:
            new HttpHeaders(
              {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',             // This is empty
              }
            )
        }).subscribe((res) => {
          this.dataa = res as Dataa[];

          // console.log(JSON.stringify(res).length+"sadasdsadsad");
          //let list: string[] = [];
          //   JSON.stringify(res).forEach(element => {
          //     list.push(element.Id);
          // });

          this.words2.length = 0;
          this.value2.length = 0;
          this.date2.length = 0;
          this.start1.length = 0;
          this.start2.length = 0;
          this.flag2.length = 0;

          var count = Object.keys(res).length;
          // console.log(count);
          for (var i = 0; i < count; i++) {
            if (i == 1) {
              this.isDisabled = true;
            }
            this.task = res[i];
            console.log(this.task["endFlag"] + "thi");
            this.words2.push({ value: this.task["task"] });
            this.searchText = this.words2[i];
            this.value2.push({ value: this.task["parentTask"] });
            this.date2.push({ value: this.task["priority"] });
            this.start1.push({ value: this.task["startDate"] });
            this.start2.push({ value: this.task["endDate"] });
            this.flag2.push({ value: this.task["endFlag"] });
            this.buttondis = false;

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

    if (tabChangeEvent.index == 2) {
      this.populateUser();

    }
    if (tabChangeEvent.index == 3) {
      this.populateTask();

    }
  }
  onSelectChange(event: any) {
    console.log(event.index);
    if (event.index === 1) {
      console.log('Tab1 is selected!');

      this.http.get('http://localhost:2222/TaskManager/getTask').subscribe((res) => {
        console.log(res);
      });




    } else {
      console.log('Tab1 is not selected!')



    }
  }
  
  resetProject2()
  {
    this.addTaskUser="";
    this.endDate="";
    this. startDate="";
    this.parentVariable="";
    this.value=0;
    this.theCheckbox=false;
    this.taskVariable="";
    this. ProjecttaskVariable="";

  }
  ResetAll()
  {
    this.userfirstnameval="";
    this.userlastnameval="";
    this.userempidval=""; 
  }

  toggleVisibility(event)
  {

console.log(event.target.checked);

const today =  new Date();
const tomorrow =  new Date(today.setDate(today.getDate() + 1));

this.date=new Date();
this.date1  =tomorrow;

  }


  validateDates(sDate: string, eDate: string){
    this.isValidDate = true;
    if((sDate == null || eDate ==null)){
      this.error={isError:true,errorMessage:'Start date and end date are required.'};
      this.isValidDate = false;
    }

    if((sDate != null && eDate !=null) && (eDate) < (sDate)){
      this.error={isError:true,errorMessage:'End date should be grater then start date.'};
      this.isValidDate = false;
    }
    return this.isValidDate;
  }
  getPosts(event: any) 
  {

    console.log(event);

    let fd = new FormData();

    fd.append("project", event);


    this.http.post("http://localhost:2222/TaskManager/getProjectTask", fd).subscribe((r) => 
    {
      this.task_data_task_view = r as TaskData[];
      console.log(JSON.stringify(r));


      //this.fireGetProject();


      // var count = Object.keys(r).length;
      // //this.options=response["firstname"];

      // for(var i=0;i<count;i++)
      // {


      // console.log(this.user_data.firstname);
      // }
      // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
      //console.error("Response " + r);

    }, (error) => {
      //console.error("Response " + error.json());
      alert("Error in inserting Project!!!! ");
    });
  }
  SearchUser() {
    this.http.get("http://localhost:2222/TaskManager/getUsers").subscribe((r) => {
      this.user_data_for_view_task = r as UserData[];
      console.log(JSON.stringify(r));


      //this.fireGetProject();


      // var count = Object.keys(r).length;
      // //this.options=response["firstname"];

      // for(var i=0;i<count;i++)
      // {


      // console.log(this.user_data.firstname);
      // }
      // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
      //console.error("Response " + r);

    }, (error) => {
      //console.error("Response " + error.json());
      alert("Error in inserting Project!!!! ");
    });
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`${type}: ${event.value}`);
  }





  updateProject(id: any) {
    //this.projectvariable = this.project_data[id].project;
  this.value=this.project_data[id].priority;

  this.projectvariable=this.project_data[id].project;
  this.value=this.project_data[id].priority;
  //this.managerVariable=this.project_data[id].;
  this.date=new Date(this.project_data[id].startDate);
  this.date1=new Date(this.project_data[id].endDate);
  //this.date=new Date("9/4/2019");


    console.log(this.projectnametemp);
    console.log(this.startDateVariable);
    this.addbuttonname = "UPDATE";
  }
  EndDateChange(event: any) {

    console.log(event.value);
  }

  sortByEndTask()
  {
  
    this.task_data_task_view = this.task_data_task_view.sort((a, b) => a.endDate.localeCompare(b.endDate));
    this.task_data_task_view = [...this.task_data_task_view];

  }

  sortByStartTask()
  {
    this.task_data_task_view = this.task_data_task_view.sort((a, b) => a.startDate.localeCompare(b.startDate));
    this.task_data_task_view = [...this.task_data_task_view];
  }

  sortByPriorityTask()
  {
    this.task_data_task_view = this.task_data_task_view.sort((a, b) => a.priority-b.priority);
    this.task_data_task_view = [...this.task_data_task_view];
  }

  sortByCompletedTask()
  {
    this.task_data_task_view = this.task_data_task_view.sort((a, b) => a.endFlag-b.endFlag);
    this.task_data_task_view = [...this.task_data_task_view];

  }
  sortByFirstName() {

    this.user_data = this.user_data.sort((a, b) => a.firstname.localeCompare(b.firstname));
    this.user_data = [...this.user_data];
    console.log("dddd");
  }

  sortByLastName() {
    this.user_data = this.user_data.sort((a, b) => a.lastname.localeCompare(b.lastname));
    this.user_data = [...this.user_data];
    console.log("dddd");

  }
  sortByID() {

    this.user_data = this.user_data.sort((a, b) => a.employeeid - b.employeeid);
    this.user_data = [...this.user_data];
    console.log("dddd");
  }
  ParentTaskCheck(event: any) {
    console.log(this.theCheckbox);

    if (this.theCheckbox === true) {
      this.parentVariable = this.taskVariable;
    }
    else {
      this.parentVariable = "";

    }

  }
  sortByStart() {
    //this.project_data.sort((a,b)=>a.startDate - b.startDate);
    this.project_data = this.project_data.sort((a, b) => a.startDate.localeCompare(b.startDate));
    this.project_data = [...this.project_data];
    console.log("dddd");

    //this.project_data=this.project_data.sort((a,b) => a.startDate.localeCompare(b.startDate));


  }
  sortByEnd() {
    this.project_data.sort((a, b) => a.endDate.localeCompare(b.endDate));
    console.log(this.project_data);
    this.project_data = [...this.project_data];

  }
  sortByPriority() {
    this.project_data.sort((a, b) => a.priority - b.priority);
    console.log(this.project_data);
    this.project_data = [...this.project_data];

  }
  sortByCompleted() {

    this.project_data.sort((a, b) => a.isCompleted.localeCompare(b.isCompleted));
    console.log(this.project_data);
    this.project_data = [...this.project_data];
  }
  searchManager() {

    //this.options = [...this.options];

    this.http.get("http://localhost:2222/TaskManager/getUsers").subscribe((r) => {
      this.user_data = r as UserData[];
      console.log(JSON.stringify(r));


      //this.fireGetProject();


      // var count = Object.keys(r).length;
      // //this.options=response["firstname"];

      // for(var i=0;i<count;i++)
      // {


      // console.log(this.user_data.firstname);
      // }
      // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
      //console.error("Response " + r);

    }, (error) => {
      //console.error("Response " + error.json());
      alert("Error in inserting Project!!!! ");
    });

  }
  searchTask() {
    this.http.get("http://localhost:2222/TaskManager/getTask").subscribe((r) => 
    {
      this.task_data = r as TaskData[];
      console.log(JSON.stringify(r));


      //this.fireGetProject();


      // var count = Object.keys(r).length;
      // //this.options=response["firstname"];

      // for(var i=0;i<count;i++)
      // {


      // console.log(this.user_data.firstname);
      // }
      // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
      //console.error("Response " + r);

    }, (error) => {
      //console.error("Response " + error.json());
      alert("Error in inserting Project!!!! ");
    });

  }
  searchProject() {
    this.http.get("http://localhost:2222/TaskManager/getProject").subscribe((r) => {
      this.project_data = r as ProjectData[];
      console.log(JSON.stringify(r));

      console.log("clicked search project")
      //this.fireGetProject();


      // var count = Object.keys(r).length;
      // //this.options=response["firstname"];

      // for(var i=0;i<count;i++)
      // {


      // console.log(this.user_data.firstname);
      // }
      // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
      //console.error("Response " + r);

    }, (error) => {
      //console.error("Response " + error.json());
      alert("Error in inserting Project!!!! ");
    });
  }
  getdataa(task: string) {

    var skinName = this.dataa.find(x => x.task == task).parentTask;
    console.log(skinName)
  }
  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.fireGetProject();
    this.myModel = 'Jose';
    this.addbuttonname = "ADD";
    this.todaydate = new Date().getDate() + 3;
    console.log(this.minDateStart);
    this.date=new Date().getDate();
    this.startDate="9/2/2019";
  }
  str: string;
  title = 'taskmanager';
  
  msg = 'Hello World';
  filter(value) {
    this.filterBy = value;
    this.searchFindLoopForLocation = this.searchFindLoopForLocation.filter(obj => obj.name == value);
  }
  openDialog(index: any) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      //   this.words2.push({value:task["task"]});
      //   this.value2.push({value:task["parentTask"]});
      //  this.date2.push({value:task["priority"]});
      //  this.start1.push({value:task["startDate"]});
      //  this.start2.push({value:task["endDate"]});
      //  this.flag2.push({value:task["endFlag"]});
      width: '500px', data: {
        task: this.words2[index].value,
        parentTask: this.value2[index].value,
        priority: this.date2[index].value,
        startDate: this.start1[index].value,
        endDate: this.start2[index].value,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog2(index: any) {
    console.log(this.task_data_task_view[index].priority+"thiyGUUUUUUUUUUU");
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      //   this.words2.push({value:task["task"]});
      //   this.value2.push({value:task["parentTask"]});
      //  this.date2.push({value:task["priority"]});
      //  this.start1.push({value:task["startDate"]});
      //  this.start2.push({value:task["endDate"]});
      //  this.flag2.push({value:task["endFlag"]});
    
      width: '500px', data: {
        task: this.task_data_task_view[index].task,
        parentTask: this.task_data_task_view[index].parentTask,
        priority: this.task_data_task_view[index].priority,
        startDate: this.task_data_task_view[index].startDate,
        endDate: this.task_data_task_view[index].endDate,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  addProject(project_name: string, startdate: string, enddate: string, priorioty: string, manager: string) {
 if(project_name.length>0)
 {
 
 
    if (this.addbuttonname === "ADD") {



if(this.theCheckbox)
{
  this.isValidDate= this.validateDates(startdate,enddate)
console.log("checked");


var start_date_val  = new Date(startdate);

var end_date_val  = new Date(enddate);
  if(start_date_val<end_date_val)
  {
    console.log("valid");
   console.log(this.theCheckbox);
   console.log("this.theCheckbox");
    console.log("ADD");

    let fd = new FormData();

    fd.append("project", project_name);
    fd.append("startdate", startdate);
    fd.append("enddate", enddate);
    fd.append("priority", priorioty);
    fd.append("manager", manager);
    this.http.post("http://localhost:2222/TaskManager/addProject", fd).subscribe((r) =>
     {

      console.log(JSON.stringify(r));
      let response = r;
      if (response["project"].length > 0) {
        alert("Project added successfully :) ");





        this.fireGetProject();

      }
      // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
      //console.error("Response " + r);

    }, (error) => {
      //console.error("Response " + error.json());
      alert("Error in inserting Project!!!! ");
    });

  }
  else
  {
    alert("'End date should be grater then start date");
    console.log("invalid");
 
  }

}
  else
  {

   console.log("ADD");

    let fd = new FormData();

    fd.append("project", project_name);
    fd.append("startdate", startdate);
    fd.append("enddate", enddate);
    fd.append("priority", priorioty);
    fd.append("manager", manager);
    this.http.post("http://localhost:2222/TaskManager/addProject", fd).subscribe((r) =>
     {

      console.log(JSON.stringify(r));
      let response = r;
      if (response["project"].length > 0) {
        alert("Project added successfully :) ");





        this.fireGetProject();

      }
      // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
      //console.error("Response " + r);

    }, (error) => {
      //console.error("Response " + error.json());
      alert("Error in inserting Project!!!! ");
    });
  }    
     

    }
    else if (this.addbuttonname === "UPDATE") {
      this.addbuttonname = "ADD";
      console.log("UPDATE");

      let fd = new FormData();

      fd.append("project", project_name);
      fd.append("startdate", startdate);
      fd.append("enddate", enddate);
      fd.append("priority", priorioty);
      fd.append("manager", manager);
      this.http.post("http://localhost:2222/TaskManager/updateProject", fd).subscribe((r) => {

        console.log(r + "asdsd");
        let response = r;
        if (response["project"].length > 0) {
          alert("Project added successfully :) ");





          this.fireGetProject();

        }
        // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
        //console.error("Response " + r);

      }, (error) => {
        //console.error("Response " + error.json());
        alert("Error in inserting Project!!!! ");
      });

    }
  }
  else{
    alert("Project Name Should not empty");

  }
  }

  resetProject()
  {

    this.projectvariable="";
    this.value="";
    this.managerVariable="";
    this.date="";
    this.date1="";
    
  }


  
  fireGetProject() {



    this.http.get("http://localhost:2222/TaskManager/getProject").subscribe((r) => {

      console.log(JSON.stringify(r) + "asdsd");
      let response = r;
      this.project_data = r as ProjectData[];

      // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
      //console.error("Response " + r);

    }, (error) => {
      //console.error("Response " + error.json());
      // alert("Error in inserting Task!!!! ");
    });
  }




  addUser(firstname: string, lastname: string, empid: string) {
    let fd = new FormData();
    console.log(firstname + "fname");
    console.log(lastname + "lname");
    console.log(empid + "empid");
    fd.append("firstname", firstname);
    fd.append("lastname", lastname);
    fd.append("employeeid", empid);


    // this.http.get("http://jsonplaceholder.typicode.com/users").
    // subscribe((data) ⇒ console.log(data))
    this.http.post("http://localhost:2222/TaskManager/addUser", fd).subscribe((r) => {

      console.log(JSON.stringify(r) + "asdsd");
      let response = r;
      if (response["firstname"].length > 0) {
        alert("User added successfully :) ");
        this.populateUser();
      }



    }, (error) => {
      //console.error("Response " + error.json());
      alert("Error in inserting Task!!!! ");
    });
  }

  populateUser() {

    this.http.get("http://localhost:2222/TaskManager/getUsers").subscribe((r) => {

      console.log(JSON.stringify(r) + "asdsd");
      let response = r;
      this.user_data = r as UserData[];
      // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
      //console.error("Response " + r);

    }, (error) => {
      //console.error("Response " + error.json());
      // alert("Error in inserting Task!!!! ");
    });
  }


  populateTask() {

    this.http.get("http://localhost:2222/TaskManager/getTask").subscribe((r) => {

      console.log(JSON.stringify(r) + "asdsd");
      let response = r;
      this.task_data_task_view = r as TaskData[];
      // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
      //console.error("Response " + r);

    }, (error) => {
      //console.error("Response " + error.json());
      // alert("Error in inserting Task!!!! ");
    });
  }
  myFunc(taskname: string, parentname: string, startdate: string, enddate: string) {
    //  console.log(taskname);
    // console.log(this.value);
    //console.log(parentname);
    //console.log(startdate);
    // console.log(enddate);

    let fd = new FormData();
    fd.append("task", taskname);
    fd.append("parentTask", parentname);
    fd.append("priority", this.value);
    fd.append("startDate", startdate);
    fd.append("endDate", enddate);
    fd.append("endFlag", "0");

    // this.http.get("http://jsonplaceholder.typicode.com/users").
    // subscribe((data) ⇒ console.log(data))
    this.http.post("http://localhost:2222/TaskManager/addTask", fd).subscribe((r) => {

      console.log(r + "asdsd");
      let response = r;
      if (response["task"].length > 0) {
        alert("Task added successfully :) ");

      }

      // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
      //console.error("Response " + r);

    }, (error) => {
      //console.error("Response " + error.json());
      alert("Error in inserting Task!!!! ");
    });
  }
  AddTask(taskname: string, parentname: string, priority: any, startdate: string, enddate: string, project: string, user: string)
   {
   
   
   
   const first_date_value = new Date(startdate);
   const last_date_value = new Date(enddate);
   if(first_date_value>last_date_value)
   {

    alert("'End date should be grater then start date");
   }
   else
   {

    console.log(taskname);
    console.log(priority);
    console.log(parentname);
    console.log(startdate);
    console.log(enddate);

    let fd = new FormData();
    fd.append("task", taskname);
    fd.append("parentTask", parentname);
    fd.append("priority", priority);
    fd.append("startDate", startdate);
    fd.append("endDate", enddate);
    fd.append("endFlag", "0");
    fd.append("project", project);
    fd.append("user", user);
    // this.http.get("http://jsonplaceholder.typicode.com/users").
    // subscribe((data) ⇒ console.log(data))
    this.http.post("http://localhost:2222/TaskManager/addTask", fd).subscribe((r) => {

      console.log(r + "asdsd");
      let response = r;
      if (response["task"].length > 0) {
        alert("Task added successfully :) ");

      }

      // this.http.post("https://httpbin.org/post", fd).subscribe((r) => {
      //console.error("Response " + r);

    }, (error) => {
      //console.error("Response " + error.json());
      alert("Error in inserting Task!!!! ");
    });
   }
   
   
   
   
  }
  onClick(event: MatTabChangeEvent) {

    console.log(event.index);
    this.str = "sad";
  }


  add() {
    this.words2.push({ value: 'gsre' });
  }
  pitch(event: any) {
    console.log(event.value);
    this.value = event.value;
  }
  checkCurrentLession(value: any) {
    console.log(value);

  }

  reset() {
    this.taskVar = "";
    this.value = "";
    this.startDate = "";
    this.parentName = "";
    this.endDate = "";

    console.log('Tab1 is selected!');
  }
  end(index: any) {
    console.log(this.words2[index].value);
    console.log(this.value2[index].value);
    console.log(this.date2[index].value);
    console.log(this.start1[index].value);
    console.log(this.start2[index].value);
    console.log(this.flag2[index].value);
    let fd = new FormData();
    fd.append("task", this.words2[index].value);
    fd.append("parentTask", this.value2[index].value);
    fd.append("priority", this.date2[index].value);
    fd.append("startDate", this.start1[index].value);
    fd.append("endDate", this.start2[index].value);
    fd.append("endFlag", "1");
    this.http.post("http://localhost:2222/TaskManager/updateTask", fd).subscribe((r) => {
      window.location.reload();
      console.log(r + "asdsd");
      let response = r;
      if (response["task"].length > 0) {
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
  endTask(index: any) {
    console.log(this.task_data_task_view[index].task);
    console.log(this.task_data_task_view[index].parentTask);
    console.log(this.task_data_task_view[index].priority);
    console.log(this.task_data_task_view[index].startDate);
    console.log(this.task_data_task_view[index].endDate);

    let fd = new FormData();
    fd.append("task", this.task_data_task_view[index].task);
    fd.append("parentTask", this.task_data_task_view[index].parentTask);
    fd.append("priority", this.task_data_task_view[index].priority);
    fd.append("startDate", this.task_data_task_view[index].startDate);
    fd.append("endDate", this.task_data_task_view[index].endDate);
    fd.append("endFlag", "1");
    this.http.post("http://localhost:2222/TaskManager/updateExistingTask", fd).subscribe((r) => {
      window.location.reload();
      console.log(r + "asdsd");
      let response = r;
      if (response["task"].length > 0) {
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

  taskVal: any;
  patentTaskval: any;
  priorityval: any;
  startDateval: any;
  endDateval: any;
  value: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
    , private http: HttpClient) { }

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
  update(taskname: string, parentname: string, startdate: string, enddate: string,priority:any) {

    console.log(taskname + "testtttt");
    console.log(parentname + "testtttt");
    console.log(priority + "testtttt");
    console.log(startdate + "testtttt");
    console.log(enddate + "testtttt");
    let fd = new FormData();
    fd.append("task", taskname);
    fd.append("parentTask", parentname);
    fd.append("priority",priority);
    fd.append("startDate", startdate);
    fd.append("endDate", enddate);
    fd.append("endFlag", "0");
    this.http.post("http://localhost:2222/TaskManager/updateTask", fd).subscribe((r) => {
      //window.location.reload();
      console.log(r + "asdsd");
      let response = r;
      if (response["task"].length > 0) {
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