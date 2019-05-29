import { Component, OnInit } from '@angular/core';
import { SolutionUp } from '../../models/SolutionUp';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {
  solutions : SolutionUp[];
  public loading: boolean;

  constructor() { }

  ngOnInit() {
    //this.loading = true;
  }

}
