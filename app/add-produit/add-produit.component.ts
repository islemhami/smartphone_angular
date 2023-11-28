import { Component, OnInit } from '@angular/core';
import { Smartphone } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Marque } from '../model/marque.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
 
})
export class AddProduitComponent implements OnInit{
  newSmartphone = new Smartphone();
  messege ! :string;
  marques! : Marque[];
  newIdMarque! : number;
  newMarque! : Marque;

  constructor(private produitService: ProduitService,private router :Router) { }

  ngOnInit(): void {
    this.produitService.listeMarque().
    subscribe(cats => {this.marques = cats._embedded.marques;
    console.log(cats);
    });
    
    }
 
addSmartphone(){
  this.newSmartphone.marque = this.marques.find((cat) => cat.idMarque == this.newIdMarque)!;
  this.produitService.ajouterSmartphone(this.newSmartphone)
  .subscribe((prod) => {
  console.log(prod);
  this.router.navigate(['produits']);
  });
  }
  


}
