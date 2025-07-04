import { Injectable } from '@angular/core';
import { produit } from '../Models/model-produit/model-produit-module';

@Injectable({
  providedIn: 'root'
})
export class ProduitService  {
  constructor() { }

   ListeProduit : Array<produit> = [
    {
      id: 0,
      nom: 'labubu',
      description:'tres bonne qualite',
      prix: 18
    },
    {
      id: 1,
      nom: 'kawachou',
      description:'tres bonne qualite',
      prix: 15
    },
    {
      id: 2,
      nom: 'papicha',
      description:'tres bonne qualite',
      prix: 11
    }
   ];
}
