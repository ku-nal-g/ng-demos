import { Component, OnInit,Input} from '@angular/core';
import { UserDetails } from '../interfaces/user-details';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() userDetailsData:UserDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
