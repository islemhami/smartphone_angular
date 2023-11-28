import { Component } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Smartphone } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styleUrls: ['./recherche-par-marque.component.css']
})
export class RechercheParMarqueComponent {
  smartphones! : Smartphone[];
  idMarque!:number;
  marques! : Marque[];

  constructor(private produitService:ProduitService){}

  ngOnInit(): void {
    this.produitService.listeMarque().subscribe(smart => {this.marques = smart._embedded.marques;
    console.log(smart);
    });
    }
    onChange() {
      this.produitService.rechercherParMarque(this.idMarque).subscribe(smart =>{this.smartphones=smart});
      }

}
