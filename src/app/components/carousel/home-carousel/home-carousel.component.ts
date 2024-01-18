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

  slideRigthAnimation:boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.autoNextSlide(4000)

  }

  autoNextSlide(ms: number):void {
    setTimeout((_:any) => {
      this.goToNextSlide();
      this.autoNextSlide(ms);
    }, ms)
  }

  getCurrentSlideImageUrl():string {
    return `url('${this.slides[this.currentIndex].url}')`
    // return `${this.slides[this.currentIndex].url}`
  }

  getCurrentSlide():IImageSlider {
    return this.slides[this.currentIndex];
  }

  goToNextSlide():void {
    const isLastSlide = this.currentIndex + 1 > this.slides.length - 1;

    this.slideRigthAnimation = true;

    if(!isLastSlide){
      this.currentIndex++;
    }else{
      this.currentIndex = 0;
    }
  }

  goToPreviousSlide():void {
    const isFirstSlide = this.currentIndex == 0;

    if(!isFirstSlide){
      this.currentIndex--;
    }else{
      this.currentIndex = this.slides.length - 1;
    }
  }

}
