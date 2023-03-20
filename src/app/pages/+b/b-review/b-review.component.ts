import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'arc-b-review',
  template: '<a routerLink="../../detail/1">go deeper</a>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink],
})
export class BReviewComponent {}
