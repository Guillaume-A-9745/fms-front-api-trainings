import { Injectable } from '@angular/core';
import { UserModel } from '../model/user-model';
import { Router, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user : UserModel | undefined;
  authenticatedUser : UserModel | undefined;
  isLogged : boolean = false;
  error : null | undefined;

  constructor(private router : Router, private http : HttpClient) { }

  login(username : string, password : string) {
    return this.http.get<UserModel[]>(environment.host + '/users?username=' + username + '&password=' + password).subscribe({
      next: (data) => {
        if (data.length !== 0) {
          this.user = data[0];
          this.isLogged = true;
          localStorage.setItem('user', JSON.stringify(this.user));
        } else {
          alert('Identifiant ou mot de passe incorrect.');
        }
      },
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null),
    })
  }

  isAdmin() {
    return this.user?.roles.includes('ADMIN');
  }

  isLoggedFunc() {
    return this.isLogged;
  }

  getUser(): UserModel | undefined {
    return this.user;
  }

  logout() {
    localStorage.removeItem('user');
    this.isLogged = false;
    this.user = undefined;
    this.router.navigateByUrl('/');
    alert('A bientôt !');
  }

  // authenticateUser(user : UserModel) : Observable<boolean>  {
  //   this.authenticatedUser = user;
  //   localStorage.setItem("authUser", JSON.stringify({username:user.username, roles:user.roles, jwt:"JWT_TOKEN"}))
  //   return of(true);
  // }

  // hasRole(role : string) : boolean {
  //   return this.authenticatedUser!.roles.includes(role);
  // }

  // isAuthenticated() {
  //   return this.authenticatedUser!=undefined;
  // }

}
