import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersListComponent } from './components/players/players-list/players-list.component';
import { AddPlayerComponent } from './components/players/add-player/add-player.component';
import { EditPlayerComponent } from './components/players/edit-player/edit-player.component';


const routes: Routes = [
  {
    path:'',
    component: PlayersListComponent
  },
{
    path:'players',
    component: PlayersListComponent
},
{
  path:'player/add',
  component: AddPlayerComponent
},
{
  path:'player/edit/:id',
  component: EditPlayerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
