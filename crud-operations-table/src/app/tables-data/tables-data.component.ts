import { DialogService } from './../services/dialog.service';
import { literalMap } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsersData } from '../interface/users-data';


@Component({
  selector: 'app-tables-data',
  templateUrl: './tables-data.component.html',
  styleUrls: ['./tables-data.component.scss']
})
export class TablesDataComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  isEdit:boolean = false;

  //columns to be displayed

  displayColumns:string[] = ['First Name','Last Name','Action'];

   // Data for table 

 usersDetails:UsersData[] = [
  {
    firstName: 'Robert',lastName: 'Campbell', isEdit: false,
  },
  {
   firstName: 'Shawn',lastName: 'Knorr',isEdit: false,
 },
 {
   firstName: 'Henry',lastName: 'Morgan', isEdit: false
 },
 {
   firstName: 'Frances',lastName: 'Miller', isEdit: false
 },
 {
   firstName: 'Steave',lastName: 'Smith', isEdit: false
 },
 {
   firstName: 'Austin',lastName: 'Miller', isEdit: false
 },
 {
   firstName: 'Guadalupe',lastName: 'Bolan', isEdit: false
 },
 {
   firstName: 'Moore',lastName: 'David', isEdit: false
 },
 {
   firstName: 'Peter',lastName: 'Parker',isEdit: false
 },
 {
   firstName: 'John',lastName: 'Smith',isEdit: false
 },
];

result:boolean = false;

// method to add data to array

addUser(fname:string , lname:string, edit:any){
  if(fname.trim().length > 0){
    if(lname.trim().length > 0){
      this.usersDetails.unshift({firstName:fname,lastName:lname, isEdit:edit});
    }
  }
  else{
    alert("Empty name can't be stored in Table");
  }
}

// method to delete data from Array using custom dialog Box of Angular Material

removeData(index:number){
 this.dialogService.openConfirmDialog("Are you sure to delete this record ?").afterClosed().subscribe(res =>{
   this.result = res;
   if(this.result == true){
    this.usersDetails.splice(index,1);
  }
 });
}

//This method enables editing mode
isEditing(){
  this.isEdit = true;
}

// user cancels editing mode
closeComponent(){
  this.isEdit = false;
}
// users clicks on save button
saveBtn(){
  this.isEdit = false;
}

}
