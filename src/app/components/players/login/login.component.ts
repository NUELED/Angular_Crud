import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private http: HttpClient,private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    this.http.post<any>('https://localhost:7043/api/Account/signin', this.loginObj).subscribe({
      next: (res) => {
        if (res.isAuthSuccessfull) {
          alert("Login Success");
          localStorage.setItem('userToken', res.token); // Store token in localStorage
          this.router.navigateByUrl('/dashboard');
        } else {
          //(res.message);
          alert('Login failed. Please check your credentials.');
        }
      },
      error: (err) => {
        console.error('Error occurred during login:', err);
        alert('An error occurred during login. Please try again.');
      }
    });
  }

  // onLogin() {
  //   debugger;
  //   this.http.post<any>('https://localhost:7043/api/Account/signin', this.loginObj).subscribe((res:any)=>{
  //     if(res.result) {
  //       alert("Login Success");
  //       localStorage.setItem('userToken', res.data.token)
  //       this.router.navigateByUrl('/dashboard')
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  // }
}

export class Login { 
  userName: string;
    password: string;
    constructor() {
      this.userName = '';
      this.password = '';
    } 

  

}
