import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';


@NgModule({
  declarations: [
    HomeCarouselComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeCarouselComponent,
  ]
})
export class CarouselModule { }
