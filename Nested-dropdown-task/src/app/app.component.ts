import { Component } from '@angular/core';
import { List } from './interface/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filter-data-task';

  subjectsList:List = [
    {
       className: 'Class 9',
       subjectsName: ['Java','Python','Angular','React Js','TypeScript'], 
    },
    {
      className: 'Class 10',
      subjectsName: ['C','MySQL','Oracle','AWS','Networks'], 
   },
   {
      className: 'Class 11',
      subjectsName: ['DatBase','MongoDB','Linear Algerbra','Machine Learning','Cloud Computing'], 
   },
   {
      className: 'Class 12',
      subjectsName: ['FireBase','Digital Logic','VueJs','Sequilize','JSON'], 
   },
  ]
}
