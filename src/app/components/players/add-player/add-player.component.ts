import { Component, OnInit } from '@angular/core';
import { Player } from '../../../models/player.model';
import { PlayersService } from '../../../services/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.css'
})
export class AddPlayerComponent implements OnInit {

addPlayerRequest: Player = {
  id: '',
  name: '',
  email: '',
  phone:0,
  salary:0,
  club:''
};

  constructor(private playersService: PlayersService, private router:Router) {}

  ngOnInit(): void {
    
  }


  addPlayer(){
    this.playersService.addPlayer(this.addPlayerRequest).subscribe({
      next: (player) => {
      // console.log(player);     
       this.router.navigate(['players']);
       }
    });  
  }

}
