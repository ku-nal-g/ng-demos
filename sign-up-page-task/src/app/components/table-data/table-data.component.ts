import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {

  constructor(private auth:AuthService) { }

  getObj:any;

  logOut(){
    this.auth.logout();
  }

  ngOnInit(): void {
    this.getObj = JSON.parse(localStorage.getItem('userDetails')||'{}');
  }

}
