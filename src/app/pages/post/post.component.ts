import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IImageSlider } from 'src/app/components/carousel/types/IImageSlider';
import { postsDb } from 'src/app/data/postRep';
import { IPost } from 'src/app/types/IPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId:number = 0

  post:IImageSlider = {id:-1, url:'', description: '', tags:[], title:'', author:''}

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( val => {
      let id = val.get('id')
      this.postId = parseInt(id != null ? id : '-1');

      let post = this.getPostById(this.postId);
      if(post){
        this.post = post;
      }
    })
  }

  getPostById(id: number):IImageSlider|undefined {
    return postsDb.find(post => post.id == id)
  }

}
