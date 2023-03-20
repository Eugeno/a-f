import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'arc-pages',
  template: '<arc-header></arc-header> <router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent {}
