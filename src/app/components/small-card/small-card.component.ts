import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../types/IPost';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() post:IPost = {id: 0, title:'', shortDescription:'', imageURL:'', tag:''};

  constructor() { }

  ngOnInit(): void {
  }

}
