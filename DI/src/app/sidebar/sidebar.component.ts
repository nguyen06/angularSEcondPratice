import { Component, OnInit, Input } from '@angular/core';
import { menuDefs } from '../Menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input('items') items: menuDefs[];

  constructor() { }

  ngOnInit() {
  }

}
