import { Component, OnInit, Input} from '@angular/core';
import { Label } from '../interfaces/labels-data';

@Component({
  selector: 'app-project-status1',
  templateUrl: './project-status1.component.html',
  styleUrls: ['./project-status1.component.css']
})
export class ProjectStatus1Component implements OnInit {

  @Input() progressBarLabels: Label; 

  constructor() { }

  ngOnInit(): void {
  }

}
