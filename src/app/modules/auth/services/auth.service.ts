import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user?: string | undefined

  constructor() { }

  loggedIn = new BehaviorSubject<boolean>(false)

  login(usuario: string, password: string): Observable<boolean> {
    if(usuario === 'admin' && password === 'admin'){
      localStorage.setItem('token', 'ksamnfoamp12eda')
      this.user = 'admin'
      return of(true)

    }
    return of(false)
  }


  isLoggedIn(): boolean {
    return this.loggedIn.getValue()
  }


  get isLoggedIn$() {
    return this.loggedIn.asObservable()
  }

}
