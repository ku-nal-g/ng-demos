import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  constructor() { }

  cardsList = ['Maestro' ,'Visa', 'Rupay','Others']

  ngOnInit(): void {
  }

}
