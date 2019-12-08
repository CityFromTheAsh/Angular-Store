import { IndexComponent } from './index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '**',
  component: IndexComponent,
  children: [{
      path: '**',
      loadChildren: () => import('./../about/about.module').then(m => m.AboutModule),
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
