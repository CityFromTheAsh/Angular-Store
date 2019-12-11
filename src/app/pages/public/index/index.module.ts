import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class IndexModule { }
