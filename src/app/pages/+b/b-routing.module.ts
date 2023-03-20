import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./b-index/b-index.component')
      .then((mod) => mod.BIndexComponent),
    children: [
      {
        path: '',
        redirectTo: 'review/all',
        pathMatch: 'full',
      },
      {
        path: 'review/all',
        loadComponent: () => import('./b-review/b-review.component')
          .then((mod) => mod.BReviewComponent),
      },
      {
        path: 'detail/:id',
        loadComponent: () => import('./b-detail-index/b-detail-index.component')
          .then((mod) => mod.BDetailIndexComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('./b-detail/b-detail.component')
              .then((mod) => mod.BDetailComponent),
            children: [
              {
                path: '',
                redirectTo: 'maintenance',
                pathMatch: 'full',
              },
              {
                path: 'maintenance',
                loadComponent: () => import('./b-detail/b-maintenance/b-maintenance.component')
                  .then((mod) => mod.BMaintenanceComponent),
              },
              {
                path: 'additional',
                loadComponent: () => import('./b-detail/b-additional/b-additional.component')
                  .then((mod) => mod.BAdditionalComponent),
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BRoutingModule {}
