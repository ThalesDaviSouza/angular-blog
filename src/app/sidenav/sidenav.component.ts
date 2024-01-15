import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  expanded:boolean = false;

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
