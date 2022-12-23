import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';

import { EnteteComponent } from './entete/entete.component';
import { PiedComponent } from './pied/pied.component';
import { BoxeursComponent } from './boxeurs/boxeurs.component';
import { BoxeursParAnneeComponent } from './boxeurs-par-annee/boxeurs-par-annee.component';
import { BoxeursParPoidsComponent } from './boxeurs-par-poids/boxeurs-par-poids.component';
import { NouveauBoxeurComponent } from './nouveau-boxeur/nouveau-boxeur.component';
import { BoxeursService } from './boxeurs.service';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedComponent,
    BoxeursComponent,
    BoxeursParAnneeComponent,
    BoxeursParPoidsComponent,
    NouveauBoxeurComponent
  ],
  imports: [
    MatExpansionModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HttpClientModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [BoxeursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
