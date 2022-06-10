import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  userName: string;
  constructor(private auth: AuthService) {
    this.userName = this.auth.getUserEmail();
  }
  ngOnInit(): void {
  }
}
