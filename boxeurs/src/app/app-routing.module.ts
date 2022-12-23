import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxeursParAnneeComponent } from './boxeurs-par-annee/boxeurs-par-annee.component';
import { BoxeursParPoidsComponent } from './boxeurs-par-poids/boxeurs-par-poids.component';
import { BoxeursComponent } from './boxeurs/boxeurs.component';
import { NouveauBoxeurComponent } from './nouveau-boxeur/nouveau-boxeur.component';

const routes: Routes = [
  { path: '', component: BoxeursComponent},
  { path: 'boxeurs-par-annee', component: BoxeursParAnneeComponent},
  { path: 'boxeurs-par-poids', component: BoxeursParPoidsComponent},
  { path: 'nouveau-boxeur', component: NouveauBoxeurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
