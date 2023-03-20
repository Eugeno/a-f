import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'arc-c-review',
  template: 'CReviewComponent <a routerLink="/pages/b/detail/1">.</a>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CReviewComponent {}
