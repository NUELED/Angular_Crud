import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../../services/players.service';
import { Player } from '../../../models/player.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{


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
  // users:any[]=[];
  // constructor(private http: HttpClient) {

  // }
  // ngOnInit(): void {
  //   this.getAllusers();
  // }

  // getAllusers() {
  //   debugger;
  //   this.http.get('https://localhost:7043/api/Account/signin').subscribe((res:any) => {
  //     this.users = res.email;
  //   } , error => {
  //     alert("Error From API")
  //   })
  // }
  

}
