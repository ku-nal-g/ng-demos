import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../interfaces/user-info';
import { UserDetails } from '../interfaces/user-details';
import { UserSocials } from '../interfaces/user-socials';
import { Label} from '../interfaces/labels-data';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    // Data for user-info Card 

    userInfoCardData:UserInfo =
      {
        name: 'John Doe',
        position: 'Full Stack Developer',
        place: 'Bay Area, San Francisco, CA',
      };
  
    // Data for user-details Card
  
    userDetailsCardData:UserDetails = 
    {
      fullName: "Kenneth Valdez",
      email: 'fip@jukmuh.al',
      phone: '(239) 816-9029',
      mobile: '(320) 380-4539',
      address: 'Bay Area, San Francisco, CA',
    };
  
    // Data for user socials details Card
  
    userSocialsDetailsCardData:UserSocials = 
      {
        website: 'https://bootdey.com',
        github: 'bootdey',
        twitter: '@bootdey',
        instagram: 'bootdey',
        facebook: 'bootdey',
      };
  
    // Labels for Project Status 1&2  Card
  
    labels:Label  = {
      
        label1: 'Web Design',
        width1: '80%',
      
        label2: 'Website Markup',
        width2: '70%',

        label3: 'One Page',
        width3: '90%',

        label4: 'Mobile Template',
        width4: '60%',

        label5: 'Backend API',
        width5: '68%',
      };
  constructor() { }

  ngOnInit(): void {
  }
}
