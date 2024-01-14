import { Component, Input, OnInit } from '@angular/core';
import { IImageSlider } from '../types/IImageSlider';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})

export class HomeCarouselComponent implements OnInit {

  @Input() slides:IImageSlider[] = [];

  currentIndex:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getCurrentSlideImageUrl():string {
    return `url('${this.slides[this.currentIndex].url}')`
    // return `${this.slides[this.currentIndex].url}`
  }

  getCurrentSlide():IImageSlider{
    return this.slides[this.currentIndex];
  }
}
