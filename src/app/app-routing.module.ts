import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UpboardComponent } from './components/upboard/upboard.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ComptesComponent } from './components/comptes/comptes.component';

import { SingleProjetComponent } from './components/single-projet/single-projet.component';
import { ModifProjetComponent } from './components/modif-projet/modif-projet.component';
import { NouveauProjetComponent } from './components/nouveau-projet/nouveau-projet.component';


const routes: Routes = [
  {path : "", component : UpboardComponent},
  {path : "projets", component : ProjetsComponent},
  {path : "projets/:id,", component : SingleProjetComponent},
  {path : "projets/modif/:id", component : ModifProjetComponent},
  {path : "projets/add", component : NouveauProjetComponent},
  {path : "solutions", component : SolutionsComponent},
  {path : "documents", component : DocumentsComponent},
  {path : "comptes", component : ComptesComponent},
  {path : "**", component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
