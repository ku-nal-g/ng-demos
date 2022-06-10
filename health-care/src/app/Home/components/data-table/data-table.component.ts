import { PopUpComponent } from '../pop-up/pop-up.component';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UsersDataService } from 'src/app/services/users-data.service';
import * as XLSX from 'xlsx';
import { SelectionModel } from '@angular/cdk/collections';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  constructor(private usersData: UsersDataService, private auth:AuthService,private dialogRef:MatDialog) { }

  displayedColumns: string[] = ['select','name','email','role','visibility','phone-number','city','actions'];
  dataSource: any = '';
  clickedRows = new Set<any>();
  fileName: string = 'Demosheet.xlsx';
  selection = new SelectionModel<any>(true, []);

  usersList:any; 

  noOfUsers:number = 0;

  toDisabled = false;

  ngOnInit(): void {
    this.usersData.get().subscribe((res) => {
      this.dataSource = new MatTableDataSource<any>(res);
      this.usersList = res;
      this.noOfUsers = this.usersList.length;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  logOut(){
    this.auth.logout();
  }

  isDisabled(){
    this.toDisabled = true;
  }

  disable(){
    this.toDisabled = false;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  isSelectedPage() {
    const numSelected = this.selection.selected.length;
    const page = this.dataSource.paginator.pageSize;
    let endIndex: number;
    if (
      this.dataSource.data.length >
      (this.dataSource.paginator.pageIndex + 1) *
      this.dataSource.paginator.pageSize
    ) {
      endIndex =
        (this.dataSource.paginator.pageIndex + 1) *
        this.dataSource.paginator.pageSize;
    } else {
      endIndex =
        this.dataSource.data.length -
        this.dataSource.paginator.pageIndex *
        this.dataSource.paginator.pageSize;
    }
    console.log(endIndex);
    return numSelected === endIndex;
  }


  applyFilter(item: string) {
    this.dataSource.filter = item.trim().toLocaleLowerCase();
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row: any) => this.selection.select(row));
  }
  selectRows() {
    // tslint:disable-next-line:max-line-length
    let endIndex: number;
    // tslint:disable-next-line:max-line-length
    if (
      this.dataSource.data.length >
      (this.dataSource.paginator.pageIndex + 1) *
      this.dataSource.paginator.pageSize
    ) {
      endIndex =
        (this.dataSource.paginator.pageIndex + 1) *
        this.dataSource.paginator.pageSize;
    } else {
      // tslint:disable-next-line:max-line-length
      endIndex = this.dataSource.data.length;
    }

    for (
      let index =
        this.dataSource.paginator.pageIndex *
        this.dataSource.paginator.pageSize;
      index < endIndex;
      index++
    ) {
      this.selection.select(this.dataSource.data[index]);
    }
  }

  exportToExcel(): void {

    let isExport = confirm("Are You sure you want to export data");
    if(isExport === true){
      let element = document.getElementById('patients');
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
  
      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
      /* save to file */
      XLSX.writeFile(wb, this.fileName);
    }
  }

  openDialog(item:any){
    console.log(item);
    this.dialogRef.open(PopUpComponent,{
      data : {
        tableHeaders: ['Name','E-mail','Role','Visibility','Phone Number','City','Actions'],
        name : item.name,
        email: item.email,
        role: item.role,
        visibility: item.visibility,
        phone_number : item.Phone_Number,
        city: item.city,
        actions: item.Actions,
      },
      panelClass: 'my-custom-dialog-class',
    });

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
}
