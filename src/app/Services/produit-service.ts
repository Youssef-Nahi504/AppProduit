import { inject, Injectable } from '@angular/core';
import { produit } from '../Models/model-produit/model-produit-module';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService  {

   http = inject(HttpClient);

   getProduits(){
    const Url = "http://localhost:8080/api/products";
    return this.http.get<Array<produit>>(Url);
   }

}
