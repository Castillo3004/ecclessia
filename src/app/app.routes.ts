import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing/landing.component'),
    children: [
      {
        path: '',
        title: 'Inicio',
        loadComponent: () => import('./landing/pages/inicio/inicio.component'),
      },
      {
        path: 'servicios',
        title: 'Servicios',
        loadComponent: () => import('./landing/pages/servicios/servicios.component'),
      },
      {
        path: 'sobre-nosotros',
        title: 'Sobre Nosotros',
        loadComponent: () => import('./landing/pages/sobre-nosotros/sobre-nosotros.component')
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  }
];
