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
      title:'business post',
      description: 'Business post description',
      tags: ['Business', 'meeting']
    },
    {
      url: '../assets/soccer-post.jpg',
      title:'soccer post',
      description: 'soccer post description',
      tags: ['soccer', 'meeting']
    },
    {
      url: '../assets/travel-post.jpg',
      title:'travel post',
      description: 'travel post description',
      tags: ['travel', 'meeting']
    },
    {
      url: '../assets/universe-post.jpg',
      title:'universe post',
      description: 'universe post description',
      tags: ['universe', 'meeting']
    },
  ]

}
