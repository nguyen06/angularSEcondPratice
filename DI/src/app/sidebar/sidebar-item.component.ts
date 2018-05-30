import { Component, OnInit, Input } from '@angular/core';
import { menuDefs} from '../Menu.model';
import { Location } from '@angular/common';
import { 
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  
})
export class SidebarItemComponent implements OnInit {
  @Input('item') item: menuDefs;

  constructor(
          private router: Router,
          private route: ActivatedRoute,
          private location: Location
  ) { }

  isActive(): boolean {
    return `/${this.item.path}` === this.location.path();
  }
  ngOnInit() {
  }

}
