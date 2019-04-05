import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [
    new Menu("Home", "/home", "The Home Page"),
    new Menu("Movies", "/movies/list", "The Movie List"),
    new Menu("Actors", "/actors/list", "The Actor List"),
  ];
  constructor() { }

  ngOnInit() {
  }

}
