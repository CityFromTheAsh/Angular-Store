import { Path } from 'src/app/resource/enum/path';
import { Component, OnInit, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

export interface ToolbarAction {
  id: number;
  lable: string;
  icon?: string;
}

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarComponent implements OnInit {

  toolbarRowWidth: number;
  @Input() actions: ToolbarAction[];

  @Output() actionSelected = new EventEmitter<number>();
  constructor(private el: ElementRef) { }

  @HostListener('window:resize', ['$event'])
  resize(event) {
    this.toolbarRowWidth = event.target.outerWidth;
  }
  ngOnInit() {
    this.toolbarRowWidth = this.el.nativeElement.offsetWidth;
  }

  selectAction(id: number) {
    this.actionSelected.emit(id);
  }
}
