import { ImportLocation } from './resource/enum/import-location';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path } from './resource/enum/path';


const routes: Routes = [{
  path: Path.EMPTY,
  loadChildren: () => import(ImportLocation.INDEX_MODULE).then(m => m.IndexModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
