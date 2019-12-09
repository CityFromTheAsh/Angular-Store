import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path } from './resource/enum/path';


const routes: Routes = [{
  path: Path.EMPTY,
  loadChildren: () => import('./pages/public/index/index.module').then(m => m.IndexModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
