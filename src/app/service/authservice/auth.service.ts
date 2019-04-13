import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public isAuthenticated(): boolean {
    const token =localStorage.getItem('admintoken')
    if(token){
      return true
    }
    else{
      return false
    }
  }
}
