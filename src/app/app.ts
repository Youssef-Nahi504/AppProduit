import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Produit } from './produit/produit';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Produit],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'AppProduit';
}
