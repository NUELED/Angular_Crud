import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PlayersService } from '../../../services/players.service';
import { Player } from '../../../models/player.model';
import { response } from 'express';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.css'
})
export class EditPlayerComponent implements OnInit { // 'implements OnInit' was added by me.
  
  playerDetails: Player = {
    id: '',
    name: '',
    email: '',
    phone:0,
    salary:0,
    club:''
  };
    
  constructor(private route: ActivatedRoute,private playerService: PlayersService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id = params.get('id');

        if(id){
          //api call @ this point, from the player service class.
          this.playerService.getPlayer(id).subscribe({
            next: (response) =>{
              console.log(response);
                this.playerDetails = response;
            }
          })
        }

      }

    });
  }

  updatePlayer(){
    this.playerService.updatePlayer(this.playerDetails.id, this.playerDetails).
    subscribe({
      next: (response) =>{
        this.router.navigate([('players')]);
      }
    })
  }
  
  //so the subscribe function is used to invoke the method/endpoint before it!!
  deletePlayer(id:string){
    this.playerService.deletePlayer(id).
    subscribe({
      next: (response) =>{
        this.router.navigate([('players')]);
      }
    })
  }


}
