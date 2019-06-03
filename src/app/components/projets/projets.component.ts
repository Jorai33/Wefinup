import { Component, OnInit, OnDestroy } from '@angular/core';
import { Projet } from '../../models/Projet';
import { ProjetService } from '../../services/projet.service';
import { StateService } from '../../services/state.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  public projets : Projet[];
  public loading: boolean;
  public part: number;
  
  private projetSub : Subscription;
  //private partSub: Subscription;

  constructor( private projetService : ProjetService, private stateService : StateService, private router : Router) { }

  ngOnInit() {
    //this.loading = true;
    //this.stateService.mode$.next('list');
    this.projetSub = this.projetService.projets$.subscribe(
      (projets) => {
        this.projets = projets;
        this.loading = false;
      }
    );
    // this.partSub = this.stateService.part$.subscribe(
    //   (part) => {
    //     this.part = part;
    //   }
    // );
    this.projetService.getProjets();
  }

  onDetailsCLicked( id : string ){
    this.router.navigate(['/projets/'+ id]);
  }

  ngOnDestroy() {
    this.projetSub.unsubscribe();
    //this.partSub.unsubscribe();
  }


}
