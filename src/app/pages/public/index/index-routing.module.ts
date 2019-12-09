import { ImportLocation } from './../../../resource/enum/import-location';
import { IndexComponent } from './index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path } from 'src/app/resource/enum/path';


const routes: Routes = [{
  path: Path.PUBLIC,
  component: IndexComponent,
  children: [{
      path: Path.ABOUT,
      loadChildren: () => import(ImportLocation.ABOUT_MODULE).then(m => m.AboutModule),
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
