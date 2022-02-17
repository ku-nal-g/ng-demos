import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {

  @Input() subjectsData:any;
  @Input() classListData:any;

  constructor() { }

  ngOnInit(): void {
  }

  searchBySubject:string = '';

}
