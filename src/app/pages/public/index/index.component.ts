import { ToolbarAction } from './../../../shared/dumb-components/responsive-toolbar/responsive-toolbar.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  actions: ToolbarAction[] = [{
      id: 0,
      lable: 'Home',
      icon: 'home'
    },
    {
      id: 1,
      lable: 'About',
      icon: 'about'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  navigateTo(id: number) {
    console.log(id);
  }

}
