
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'
// import { AuthService } from 'src/app/services/auth.service';
// import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  estConnecte: boolean;
  clientConnecte: string;
  afficherRegister: boolean;


  constructor() { }

  ngOnInit() {
    this.estConnecte = true;
  }
}