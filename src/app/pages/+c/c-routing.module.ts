import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CReviewComponent } from './c-review/c-review.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'review',
    pathMatch: 'full',
  },
  {
    path: 'review',
    component: CReviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CRoutingModule {}
