import { Component } from '@angular/core';
import { IImageSlider } from './carousel/types/IImageSlider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog';

  slides:IImageSlider[] = [
    {
      url: '../assets/business-post.jpg',
      title:'bussines post',
      description: 'Bussines post description',
      tags: ['Business', 'meeting']
    }
  ]

}
