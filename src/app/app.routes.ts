import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/components/components.component').then(c => c.ComponentsComponent) },
    { path: 'components', loadComponent: () => import('./pages/components/components.component').then(c => c.ComponentsComponent) },
    { path: 'cdk', loadComponent: () => import('./pages/cdk/cdk.component').then(c => c.CdkComponent) },
    { path: 'theming', loadComponent: () => import('./pages/theming/theming.component').then(c => c.ThemingComponent) },
];
