import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersListComponent } from './components/players/players-list/players-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { RouterModule, provideRouter } from '@angular/router';
import { AddPlayerComponent } from './components/players/add-player/add-player.component';
import { FormsModule } from '@angular/forms';
import { EditPlayerComponent } from './components/players/edit-player/edit-player.component';
import { TestComponent } from './components/players/test/test.component';
import { DataTablesModule } from 'angular-datatables';
import { LoginComponent } from './components/players/login/login.component';
import { DashboardComponent } from './components/players/dashboard/dashboard.component';
import { LayoutComponent } from './components/players/layout/layout.component';
import { customInterceptor } from './services/custom.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    TestComponent,
    LoginComponent,
    DashboardComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    DataTablesModule,
    
  ],
  providers: [
    
    provideClientHydration(),
    //{ provide: HTTP_INTERCEPTORS, useClass: customInterceptor, multi: true },
    provideHttpClient(withInterceptors([customInterceptor])),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
