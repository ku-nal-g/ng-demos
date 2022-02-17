import { ImagesSrc } from './../interface/images-src';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  imagesList:ImagesSrc ={
    src1: 'assets/img1.jpg',
    src2: 'assets/img2.jpg',
    src3: 'assets/img3.jpg',
  }
}
