import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Player } from '../models/player.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }

 /* getAllPlayers(): Observable<Player[]>{
   return  this.http.get<Player[]>(this.baseApiUrl + 'api/Players')
  } */

  getAllPlayers2(): Observable<Player[]> {
    return this.http.get<Player[]>(this.baseApiUrl + 'api/Players');
  }
  
  addPlayer(addPlayerRequest: Player): Observable<Player> {
    addPlayerRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Player>(this.baseApiUrl + 'api/Players/create-player', addPlayerRequest);
  }
   
  getPlayer(id: string): Observable<Player> {
    return this.http.get<Player>(this.baseApiUrl + 'api/Players/' + id);   
  }

  updatePlayer(id: string, updatePlayerRequest : Player): Observable<Player> {
    return this.http.put<Player>(this.baseApiUrl + 'api/Players/' + id, updatePlayerRequest);   
  }

  deletePlayer(id: string): Observable<Player> {
    return this.http.delete<Player>(this.baseApiUrl + 'api/Players/' + id);   
  }

}
