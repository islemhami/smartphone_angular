import { Component } from '@angular/core';
import { Marque } from '../model/marque.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-liste-marques',
  templateUrl: './liste-marques.component.html',
  styleUrls: ['./liste-marques.component.css']
})
export class ListeMarquesComponent {
  marques! : Marque[];
constructor(private produitService : ProduitService) { }
ngOnInit(): void {
this.produitService.listeMarque().
subscribe(smarts => {this.marques = smarts._embedded.marques;
console.log(smarts);
});
}


}
