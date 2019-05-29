import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from "angular2-flash-messages";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpboardComponent } from './components/upboard/upboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { ComptesComponent } from './components/comptes/comptes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UpboardComponent,
    NotFoundComponent,
    SidebarComponent,
    DocumentsComponent,
    ProjetsComponent,
    SolutionsComponent,
    ComptesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
