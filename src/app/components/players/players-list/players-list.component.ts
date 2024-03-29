import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../../services/players.service';
import { response } from 'express';
import { Console } from 'console';
import { Player } from '../../../models/player.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css'
})

export class PlayersListComponent implements OnInit {
    
  players: Player[] = [];
  dtoptions:DataTables.Settings={}
  //dtTrigger:Subject<any>=new Subject<any>(); we are not using "dtTrigger".

  constructor(private playersService: PlayersService)
  {

  } 

    ngOnInit(): void{
      this.dtoptions={
       pagingType:'full_numbers',
      // searching:false //'simple_numbers', 'full_numbers' can also be used as a pagingType
      //paging:false
       //lengthChange:false
      };
       this.playersService.getAllPlayers2().subscribe({
        next:(players) =>{
          this.players=players;   
          //this.dtTrigger.next(null);        
         },
           error:(response) =>{
            console.log(response);           
           }
       })
      }

}

