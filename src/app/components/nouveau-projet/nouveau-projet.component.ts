import { Component, OnInit, ViewChild } from '@angular/core';
import { Projet } from '../../models/Projet';
import { ProjetService } from '../../services/projet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-projet',
  templateUrl: './nouveau-projet.component.html',
  styleUrls: ['./nouveau-projet.component.css']
})
export class NouveauProjetComponent implements OnInit {
  showProjetForm: boolean = false;
  @ViewChild("projetForm") form : any;

  projet: Projet = {
    nom: "",
    etatProjet: "",
    dateDemandeFinancement : ""
  }

  projets: Projet[];

  constructor( private projetServ : ProjetService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit({value, valid} : {value : Projet, valid : boolean}) {

    if(!valid){
      console.log("form is not valid");
      
    }else{
      
      value.dateDemandeFinancement = new Date();
      value.hide = true;
      
      
      this.projetServ.addProjet(value);
      
      this.form.reset();
      this.showProjetForm = false ;
      //this.router.navigate(['/projets']);

    }
    
  }

  

}
