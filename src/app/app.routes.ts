import { Routes } from '@angular/router';
import { Produit } from './produit/produit';

export const routes: Routes = [
    { path: '', redirectTo: 'produit', pathMatch: 'full' },
    { path: 'produit', component: Produit },
];
