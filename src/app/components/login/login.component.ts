import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user-model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userFormGroup! : FormGroup;
  errorMessage : any;

  constructor(private fb : FormBuilder, private authService : AuthenticationService, private router : Router) {}

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      username : this.fb.control(""),
      password : this.fb.control("")
    })
  }

  onLogin() {
    if (this.userFormGroup.valid) {
      this.authService.login(
        this.userFormGroup.value.username,
        this.userFormGroup.value.password
      );

      this.nextMove();
    }
  }
  
  nextMove() {
    setTimeout(() => {
      if (this.authService.isLoggedFunc()) {
        if (this.authService.isAdmin()) {
          this.router.navigateByUrl('adminManagement');
        } else {
          this.router.navigateByUrl('trainings');
        }
        alert('Vous etes bien connecté !');
      } else {
        this.router.navigateByUrl('auth');
      }
    }, 500);
  }
}
