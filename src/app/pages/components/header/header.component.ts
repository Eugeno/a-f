import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'arc-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
