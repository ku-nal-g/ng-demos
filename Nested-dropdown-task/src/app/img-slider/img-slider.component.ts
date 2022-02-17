import { Component, OnInit,Input} from '@angular/core';
import { ImagesSrc } from '../interface/images-src';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {

  @Input() images:ImagesSrc;
 
  constructor() { }

  ngOnInit(): void {
  }

}
