import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { CarouselModule } from './carousel/carousel.module';



@NgModule({
  declarations: [
    SidenavComponent,
    SmallCardComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    CarouselModule,
    SidenavComponent,
    SmallCardComponent
  ]
})
export class ComponentsModule { }
