import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveToolbarComponent } from './dumb-components/responsive-toolbar/responsive-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [ResponsiveToolbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule
  ],
  exports: [
    ResponsiveToolbarComponent
  ]
})
export class SharedModule { }
