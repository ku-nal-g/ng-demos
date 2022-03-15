import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { PostsData } from 'src/app/interfaces/posts-data';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  constructor(private test:TestService) { }

  apiData:PostsData[] = [];

  ngOnInit(): void {
    this.test.fetchData().subscribe((res =>{
      console.log(res);
      this.apiData = res;
    }),
    (err) =>{
      alert("unable to get data from api");

    });
  }
}
