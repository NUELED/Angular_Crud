import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './components/players/players-list/players-list.component';
import { AddPlayerComponent } from './components/players/add-player/add-player.component';
import { EditPlayerComponent } from './components/players/edit-player/edit-player.component';
import { TestComponent } from './components/players/test/test.component';
import { LoginComponent } from './components/players/login/login.component';
import { LayoutComponent } from './components/players/layout/layout.component';
import { DashboardComponent } from './components/players/dashboard/dashboard.component';
import { authGuard } from './services/auth.guard';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [authGuard]
      },
      {
        path: 'players',
        component: PlayersListComponent
      },
      {
        path: 'player/add',
        component: AddPlayerComponent,
        canActivate: [authGuard]
      },
      {
        path: 'player/edit/:id',
        component: EditPlayerComponent
      },
      {
        path: 'test',
        component: TestComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
// {
//     path: '', redirectTo:'login' , pathMatch:'full'
// },
// {
//     path:'',
//     component: PlayersListComponent
// },
// {
//     path:'players',
//     component: PlayersListComponent
// },
// {
//   path:'player/add',
//   component: AddPlayerComponent,
//   canActivate: [authGuard]
// },
// {
//   path:'player/edit/:id',
//   component: EditPlayerComponent
// }
// ,
// {
//   path:'test',
//   component: TestComponent
// },
// {
//   path:'login',
//   component:LoginComponent
// },
// {
//   path:'',
//   component:LayoutComponent,
//   children:[
//       {
//           path:'dashboard',
//           component:DashboardComponent,
//          // canActivate: [authGuard]


//       }
//   ]
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
