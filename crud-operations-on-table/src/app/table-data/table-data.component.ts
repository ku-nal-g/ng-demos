import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 usersDetails:any = [
   {
     firstName: 'Robert',
     lastName: 'Campbell',
   },
   {
    firstName: 'Shawn',
    lastName: 'Knorr',
  },
  {
    firstName: 'Henry',
    lastName: 'Morgan'
  },
  {
    firstName: 'Frances',
    lastName: 'Miller'
  },
  {
    firstName: 'Steave',
    lastName: 'Smith'
  },
  {
    firstName: 'Austin',
    lastName: 'Miller'
  },
  {
    firstName: 'Guadalupe',
    lastName: 'Bolan'
  },
  {
    firstName: 'Moore',
    lastName: 'David'
  },
  {
    firstName: 'Peter',
    lastName: 'Parker'
  },
  {
    firstName: 'John',
    lastName: 'Smith'
  },
 ];

 addUser(fname:string , lname:string){
   if(fname.trim().length > 0){
     if(lname.trim().length > 0){
       this.usersDetails.unshift({firstName:fname,lastName:lname});
     }
   }
 }

}
