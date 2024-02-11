import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersListComponent } from './components/players/players-list/players-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddPlayerComponent } from './components/players/add-player/add-player.component';
import { FormsModule } from '@angular/forms';
import { EditPlayerComponent } from './components/players/edit-player/edit-player.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    AddPlayerComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
