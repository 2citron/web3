import { Component, OnInit } from '@angular/core';
import { Boxeurs } from '../boxeurs';
import {MatTable} from '@angular/material/table';  // Permet de mettre à jour les données du tableau 
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide
import { BoxeursService } from '../boxeurs.service';


@Component({
  selector: 'app-boxeurs',
  templateUrl: './boxeurs.component.html',
  styleUrls: ['./boxeurs.component.css']
})
export class BoxeursComponent implements OnInit{
  columnsToDisplay = ["nbGame", "nbVictory", "nbKO", "nbTKO", "nbDefeat", "name", "nickname", "firstMatch", "isActive", "cityBoxedIn", "weightClass"]
  boxeurs: Boxeurs[] = [];
  newBoxeur: Boxeurs = {nbGame : 0, nbVictory: 0, nbKO: 0, nbTKO: 0, nbDefeat: 0 , name:"", nickname:"", firstMatch:"", isActive : false, opponents:[""], cityBoxedIn:[""], weightClass:""};
  selectedBoxeurs?: Boxeurs = {nbGame : 0, nbVictory: 0, nbKO: 0, nbTKO: 0, nbDefeat: 0 , name:"", nickname:"", firstMatch:"", isActive : false, opponents:[""], cityBoxedIn:[""], weightClass:""};
  constructor(private boxeursService: BoxeursService) { }


  ngOnInit(): void {
    this.getBoxeurs();
  }
  getBoxeurs(): void {
    this.boxeursService.getBoxeurs()
        .subscribe(resultat => this.boxeurs = resultat);
  }

  onSelect(boxeurs: Boxeurs): void {
    this.selectedBoxeurs = boxeurs; 
  }
  onAdd(tableBoxeurs: MatTable<Boxeurs>, boxeurFormAjout: NgForm) {
    if(boxeurFormAjout.valid) {
      this.boxeursService.addBoxeurs(this.newBoxeur)
          .subscribe(boxeur  => { this.boxeurs.push(boxeur); boxeurFormAjout.resetForm(); tableBoxeurs.renderRows();});
    }
  }

  onEdit(boxeursFormEdition: NgForm): void {
    if (boxeursFormEdition.valid && this.selectedBoxeurs) {
      this.boxeursService.updateBoxeur(this.selectedBoxeurs)
          .subscribe(() => this.selectedBoxeurs = undefined);
    }
   }
   
   onDelete(boxeurs: Boxeurs): void {
    if(boxeurs._id) 
    {
	  this.boxeursService.deleteBoxeur(boxeurs._id)
        .subscribe(result => this.boxeurs = this.boxeurs.filter(h => h !== boxeurs)); 
    }
   }

}
