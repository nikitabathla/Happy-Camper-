import { AuthService } from './providers/auth.service';
import { Router } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, NgModel} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import { NgZone } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLoggedIn: boolean;
  private userDisplayName: string;
  private userEmail: string;
  
  /*constructor(public dialog: MatDialog) {

  }

openDialog() {
  let dialogref = this.dialog.open(SignUpComponent);
  console.log(this.dialog);
}*/
/*constructor(public authService: AuthService, private router: Router) {
  this.authService.af.auth.onAuthStateChanged((auth) => {
    if(auth == null) {
      this.isLoggedIn = false;
      this.userDisplayName = " ";
      this.userEmail = " ";
    }
    else {
      this.isLoggedIn = true;
      this.userDisplayName = auth.displayName;
      this.userEmail = auth.email;
    }
  })
}*/

}

