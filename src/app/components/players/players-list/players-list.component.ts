import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../../services/players.service';
import { response } from 'express';
import { Console } from 'console';
import { Player } from '../../../models/player.model';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css'
})

export class PlayersListComponent implements OnInit {
    
  players: Player[] = [];
  constructor(private playersService: PlayersService)
  {

  } 

    ngOnInit(): void{
       this.playersService.getAllPlayers2().subscribe({
        next:(players) =>{
          this.players=players;           
         },
           error:(response) =>{
            console.log(response);           
           }
       })
      }

}

