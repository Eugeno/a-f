import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadingService implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return timer(5000).pipe(map(() => fn()));
  }
}
