import { Component, OnInit } from '@angular/core';
import { Projet } from '../../models/Projet';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  projets : Projet[];
  public loading: boolean;

  constructor() { }

  ngOnInit() {
    //this.loading = true;
  }

}
