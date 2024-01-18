import { Component, OnInit } from '@angular/core';
import { IImageSlider } from 'src/app/components/carousel/types/IImageSlider';
import { latestPosts, postsDb } from 'src/app/data/postRep';
import { IPost } from 'src/app/types/IPost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.slides = postsDb;
    this.latestPosts = latestPosts;
  }

  slides:IImageSlider[] = []

  latestPosts:IPost[] = []

}
