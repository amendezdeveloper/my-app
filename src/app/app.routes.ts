import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { Home2Component } from './pages/home2/home2.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'Headers',
    component: HeaderComponent,
  },
  {
    path: 'Footers',
    component: FooterComponent,
  },
  {
    path: 'Pagina1',
    component: HomeComponent,
  },
  {
    path: 'Pagina2',
    component: Home2Component,
  }
];
