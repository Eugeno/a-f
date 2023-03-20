import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesComponentsModule } from './components/pages-components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ReactiveFormsModule,
    PagesComponentsModule,
  ],
  declarations: [PagesComponent],
})
export class PagesModule {}
