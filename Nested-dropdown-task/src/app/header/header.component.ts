import { Component, OnInit,Input} from '@angular/core';
import { List } from '../interface/list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() subjectsData:List;

  constructor() { }

  ngOnInit(): void {
  }

}
