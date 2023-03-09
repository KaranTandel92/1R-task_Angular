import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-table-task';

  // start : form styling
  firstForm =
    "display: flex;flex-direction: column"

  headName =
    "margin-top : 8px; margin-bottom:3px; margin-left:40px"

  studentData =
    "padding: 10px; margin-right:150px; margin-left:40px; border-radius:10px; border:0;box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 0px 0px 1px rgba(104, 113, 130, 0.16);"

  btn =
    "height:35px; width:180px; margin-left:40px; margin-top:20px; border-radius:30px; border:0; cursor:pointer"
  // end : form styling 


  // this event show the student name and address in log
  userName: string = "Karan";
  userAddress: string = "";
  userLName: string = "";

  onStudentInfo() {
    console.log(this.userName);
    console.log(this.userLName);
    console.log(this.userAddress);

  }
  //end : event

  //start : table style
  studentName =
    "margin-left:40px"

  tableContainer =
    "margin:20px"

  table =
    "width:100%;border:1px solid black; border-collapse: collapse; text-align:center"

  tableHeading =
    "text-align:center; font-size:20px; margin:40px; border:1px solid black"

  lineDraw =
    "border:1px solid black"
  //start : table style

}

