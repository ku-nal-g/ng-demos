import { Component, OnInit,Input} from '@angular/core';
import { Label } from '../interfaces/labels-data';

@Component({
  selector: 'app-project-status2',
  templateUrl: './project-status2.component.html',
  styleUrls: ['./project-status2.component.css']
})
export class ProjectStatus2Component implements OnInit {

  @Input() progressBarLabels:Label;

  constructor() { }

  ngOnInit(): void {
  }

}
