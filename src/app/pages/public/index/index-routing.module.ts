import { IndexComponent } from './index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path } from 'src/app/resource/enum/path';

const pathMatch = 'full';

const routes: Routes = [{
  path: Path.PUBLIC,
  component: IndexComponent,
  children: [{
      path: Path.ABOUT,
      loadChildren: () => import('./../about/about.module').then(m => m.AboutModule),
    }
  ]
}, {
    path: Path.EMPTY,
    redirectTo: Path.PUBLIC,
    pathMatch
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
