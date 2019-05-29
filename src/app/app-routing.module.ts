import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UpboardComponent } from './components/upboard/upboard.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ComptesComponent } from './components/comptes/comptes.component';


const routes: Routes = [
  {path : "", component : UpboardComponent},
  {path : "projets", component : ProjetsComponent},
  {path : "solutions", component : SolutionsComponent},
  {path : "documents", component : DocumentsComponent},
  {path : "comptes", component : ComptesComponent},
  {path : "**", component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
