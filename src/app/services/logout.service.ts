import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(private router: Router) { }

  logout(): void {
    // Clear authentication data (e.g., token) from local storage or session storage
    localStorage.removeItem('userToken');
    
    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
