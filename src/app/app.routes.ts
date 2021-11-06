import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: '', redirectTo: "layout", pathMatch: "full" },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
];