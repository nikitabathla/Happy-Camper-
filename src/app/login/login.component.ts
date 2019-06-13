import { AuthService } from './../providers/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {AngularFireAuth}  from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = "";

  constructor(public authService : AuthService, private router: Router,  private zone: NgZone) {

  }

  ngOnInit() {

  }

  login() {
    this.authService.loginWithGoogle().then((res) => {
      this.zone.run(() => { 
      this.router.navigate(['/explore']);
   });
   this.authService.af.auth.onAuthStateChanged((user) => {
    if (user != null) {
      
        this.userName = user.displayName;
        alert("Welcome to Happy Camper, " +this.userName+"!");
        
        
    } 
});
  });
  }
}


