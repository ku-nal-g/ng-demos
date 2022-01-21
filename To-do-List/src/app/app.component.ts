import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-do-List';
  
  list:any = [];
  addTask(item:string){
    if(item.trim().length > 0) {
      this.list.push(item);
    } else {
      alert("enter a valid input")
    }
  }

  removeTask(id:number){
    this.list.splice(id,1);
  }

}
