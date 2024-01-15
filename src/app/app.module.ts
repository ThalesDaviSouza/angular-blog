import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CarouselModule } from './carousel/carousel.module';
import { SmallCardComponent } from './small-card/small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SmallCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
