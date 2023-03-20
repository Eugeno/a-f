import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, withPreloading } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CustomPreloadingService } from './custom-preloading.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(HttpClientModule),
    provideRouter([
      {
        path: 'pages',
        canActivate: [],
        loadChildren: () => import('./app/pages/pages.module').then((module) => module.PagesModule),
      },
      { path: '', redirectTo: 'pages', pathMatch: 'full' },
      { path: '**', redirectTo: 'pages' },
    ], withPreloading(CustomPreloadingService)),
  ],
})
  .catch((err) => console.error(err));
