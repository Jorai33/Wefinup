import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Projet } from '../models/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private projets : Projet[] = [
    {
      _id : "1516515gsgd",
      nom : "Refonte ancienne bâtisse",
      dateDemandeFinancement : "22/05/2019",
      etatProjet : "Demande acceptée"
    },
    
    {
      _id : "156121fef",
      nom : "Achat piscine communale",
      dateDemandeFinancement : "18/04/2019",
      etatProjet : "Demande en attente de validation"
    }
  ];
  

  public projets$ = new Subject<Projet[]>();
  

  constructor(private http: HttpClient) { 
    
  }
  getProjets() {
    this.http.get('http://localhost:3000/api/projets').subscribe(
      (projets: Projet[]) => {
        if (projets) {
          this.projets = projets;
          this.emitProjet();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  emitProjet() {
    this.projets$.next(this.projets);
  }
}
