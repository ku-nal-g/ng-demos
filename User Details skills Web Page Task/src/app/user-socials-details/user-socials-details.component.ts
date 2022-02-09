import { Component, OnInit,Input} from '@angular/core';
import { UserSocials } from '../interfaces/user-socials';

@Component({
  selector: 'app-user-socials-details',
  templateUrl: './user-socials-details.component.html',
  styleUrls: ['./user-socials-details.component.css']
})
export class UserSocialsDetailsComponent implements OnInit {

  @Input() userSocialsData: UserSocials;

  constructor() { }

  ngOnInit(): void {
  }
  
}
