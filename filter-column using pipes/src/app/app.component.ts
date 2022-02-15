import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filter';

  subjectsArr = [
    {
      class_5: 'Java', 
      class_6: 'Python',
      class_7: 'Angular'
    },
    {
      class_5: 'C', 
      class_6: 'C++',
      class_7: 'React'
    },
    {
      class_5: 'AngularJs', 
      class_6: 'NextJs',
      class_7: 'VueJs'
    },
    {
      class_5: 'Algorithms', 
      class_6: 'Ruby',
      class_7: 'VanillaJs'
    },
    {
      class_5: 'Linear Algebra', 
      class_6: 'Integration',
      class_7: 'MySql'
    },
    {
      class_5: 'Hadoop', 
      class_6: 'Cloud Computing',
      class_7: 'Blockchain'
    },
    {
      class_5: 'AI', 
      class_6: 'Machine Learning',
      class_7: 'DataBase'
    },
  ];

  sub5Search:string = '';
}
