import { Component } from '@angular/core';
import { Smartphone } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import {ProduitsComponent}from '../produits/produits.component';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {
  smartphones! : Smartphone[];
  nomModele!:string;
  allSmartphones!:Smartphone[];

   constructor(private produitService:ProduitService){}

   ngOnInit(): void {
    this.produitService.listeSmartphones().subscribe(prods => {
    console.log(prods);
    this.allSmartphones = prods;
    });
    }
    
  rechercherProds(){
    this.produitService.rechercherParNom(this.nomModele).
    subscribe(prods => {this.smartphones = prods;
    console.log(prods)});
    }

    onKeyUp(filterText : string){
      this.smartphones = this.allSmartphones.filter(item =>
      item.nomModele.toLowerCase().includes(filterText));
      }
      

}
