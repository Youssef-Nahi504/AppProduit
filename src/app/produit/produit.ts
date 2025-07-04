import { Component, inject, OnInit } from '@angular/core';
import { ProduitService } from '../Services/produit-service';
import { produit } from '../Models/model-produit/model-produit-module';
import { signal } from '@angular/core';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-produit',
  imports: [],
  templateUrl: './produit.html',
  styleUrl: './produit.css'
})
export class Produit implements OnInit {

  produitService = inject(ProduitService);
  ListeProduit = signal<Array<produit>>([]);

  ngOnInit(): void {
    this.produitService.getProduits().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      }
      )
    ).subscribe((prod) => {
      this.ListeProduit.set(prod);
    })
  }

}
