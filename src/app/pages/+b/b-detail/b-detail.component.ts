import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'arc-b-detail',
  templateUrl: './b-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterOutlet],
})
export class BDetailComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateTo(url: string): void {
    this.router.navigate([url], { relativeTo: this.route });
  }
}
