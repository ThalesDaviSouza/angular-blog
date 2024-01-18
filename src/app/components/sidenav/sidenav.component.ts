import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../types/IPost';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  expanded:boolean = false;
  @Input() latestPosts:IPost[] = []

  constructor() { }

  ngOnInit(): void {
  }

  expandSidenav():void{
    this.expanded = true;
  }

  hideSidenav():void {
    this.expanded = false;
  }

}
