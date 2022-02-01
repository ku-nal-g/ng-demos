import { Component,ViewChild,OnInit,AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
  title = 'material-demo';
  displayedColumns: string[] = ['position', 'name','cgpa' ,'qualification','gender'];

  // creating datasource as instance of mattabledatasource for filtering 
  dataSource = new MatTableDataSource<StudentData>(ELEMENT_DATA);

  // to get hold of reference to the matpaginator component

  @ViewChild(MatPaginator) paginator: MatPaginator;

  //to get hold of reference to the matsort component

  @ViewChild(MatSort) sort: MatSort;
 
 // A lifecycle hook that is called after Angular has fully initialized a component's view.
 //Respond after Angular initializes the component's views and child views, or the view that contains the directive. (ngAfterViewInit)

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // For filtering out

  applyFilter(item: any){
    this.dataSource.filter = item.trim().toLowerCase();
  }
}


export interface StudentData {
  name: string; 
  position: number;
  cgpa: number;
  qualification: string;
  gender:string;
}

// Data source provided for tables

const ELEMENT_DATA: StudentData[] = [
  {position: 1,  name: 'Rohan',  cgpa: 6.03, qualification: 'BBA',  gender: 'M'},
  {position: 2,  name: 'Sohan',  cgpa: 8.02, qualification: 'BSC',  gender: 'M'},
  {position: 3,  name: 'Tarun',  cgpa: 6.94, qualification: 'LLB',  gender: 'M'},
  {position: 4,  name: 'Raven',  cgpa: 9.01, qualification: 'MBA',  gender: 'M'},
  {position: 5,  name: 'Andy',   cgpa: 7.02, qualification: 'BTECH',gender: 'M'},
  {position: 6,  name: 'Sandy',  cgpa: 5.01, qualification: 'BA',   gender: 'M'},
  {position: 7,  name: 'Tony',   cgpa: 4.09, qualification: 'MBBS', gender: 'M'},
  {position: 8,  name: 'Honey',  cgpa: 5.99, qualification:'BTECH', gender: 'M'},
  {position: 9,  name: 'Sonu',   cgpa: 8.92, qualification: 'BBA',  gender: 'M'},
  {position: 10, name: 'Monu',   cgpa: 8.99, qualification: 'BSC',  gender: 'M'},
  {position: 11, name: 'Alex',   cgpa: 6.03, qualification: 'BBA',  gender: 'M'},
  {position: 12, name: 'Kevin',  cgpa: 8.02, qualification: 'BSC',  gender: 'M'},
  {position: 13, name: 'Tanishq',cgpa: 6.94, qualification: 'LLB',  gender: 'M'},
  {position: 14, name: 'Chunnu', cgpa: 9.01, qualification: 'MBA',  gender: 'M'},
  {position: 15, name: 'Benky',  cgpa: 7.02, qualification: 'BTECH',gender: 'M'},
  {position: 16, name: 'Soni',   cgpa: 5.01, qualification: 'BA',   gender: 'F'},
  {position: 17, name: 'Munna',  cgpa: 4.09, qualification: 'MBBS', gender: 'M'},
  {position: 18, name: 'Priti',  cgpa: 5.99, qualification:'BTECH', gender: 'F'},
  {position: 19, name: 'Pallav', cgpa: 8.92, qualification: 'BBA',  gender: 'M'},
  {position: 20, name: 'Renu',   cgpa: 8.99, qualification: 'BSC',  gender: 'F'}
];


