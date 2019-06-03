import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/Projet';
import { ProjetService } from 'src/app/services/projet.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-projet',
  templateUrl: './single-projet.component.html',
  styleUrls: ['./single-projet.component.css']
})
export class SingleProjetComponent implements OnInit {
  id: string;
  projet: Projet;
  souscription : Subscription;

  constructor( private projetServ : ProjetService, private router : Router, private route : ActivatedRoute, private flashMessage : FlashMessagesService) { }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params['id'];

    //Get project with that id 
   // this.projetServ.getProjetById(params.id).
    this.route.params.subscribe(
      (params: Params) => {
        this.projetServ.getProjetById(params.id).then(
          (projet: Projet) => {
            //this.loading = false;
            this.projet = projet;
          }
        );
      }
    );
  }

  onDeleteClick(){
    if(confirm("Etes-vous sûr ?")){
      this.projetServ.deleteProjet(this.projet._id);
      this.flashMessage.show("Client supprimé", { 
        cssClass: 'alert-success', timeout : 4000
      });
      this.router.navigate(['/']);

    }
  }

}
