import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {


  const router = inject(Router);
 
  if (typeof localStorage !== 'undefined') {

      const localData =  localStorage.getItem('userToken'); 
      if(localData != null)
       {
         return true;
       } 
      else 
      {
        router.navigateByUrl('/login')
        return false;
      }
   } 
   else 
   {
         console.error('localStorage is not available');
        return false;
   }


   // Retrieve user data from local storage
  //  const userData = localStorage.getItem('userData');
  
  //  if (userData) {
  //    // Parse user data
  //    const user = JSON.parse(userData);
     
  //    // Check if the user has the required role (assuming 'admin' role)
  //    if (user && user.role === 'admin') {
  //      return true; // Allow access
  //    }
  //  }
 
  //  // If user is not logged in or does not have the required role, redirect to login page
  //  router.navigateByUrl('/login');
  //  return false;
  
};
  
//ng g guard auth // for generating guard.