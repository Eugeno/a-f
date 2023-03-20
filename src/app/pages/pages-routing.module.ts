import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'b',
        loadChildren: () => import('./+b/b.module')
          .then((m: typeof import('./+b/b.module')) => m.BModule),
      },
      {
        path: 'c',
        loadChildren: () => import('./+c/c.module')
          .then((m: typeof import('./+c/c.module')) => m.CModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
