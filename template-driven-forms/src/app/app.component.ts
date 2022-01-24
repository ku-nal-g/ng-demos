import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template-driven-forms';

  platforms:any = ['Linkedin','Github','Gmail','Facebok','Instagram']


  showUserData(item:any){
    console.warn(item);
  }  
}
