import { Component } from '@angular/core';
import { LogoutService } from '../../../services/logout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private logoutService: LogoutService) { }

  logout(): void {
    this.logoutService.logout();
  } 

}
