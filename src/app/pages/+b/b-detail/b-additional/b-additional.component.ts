import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'arc-b-additional',
  template: 'BAdditionalComponent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BAdditionalComponent {}
