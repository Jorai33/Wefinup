import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Projet } from '../models/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  
  projets : Projet[] = [

  ];
  

   projets$ = new Subject<Projet[]>();
  
  

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

  addProjet( projet : Projet){
    //this.projets.unshift(projet);
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/projets', projet).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getProjetById(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/api/projets/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteProjet(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete('http://localhost:3000/api/projets/' + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


}
