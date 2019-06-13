import { AuthGuard } from './auth.guard';
import { AuthService } from './providers/auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, Router, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MatDialogModule} from '@angular/material';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ExploreComponent } from './explore/explore.component';
import { SubmitComponent } from './submit/submit.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import "froala-editor/js/froala_editor.pkgd.min.js";
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
import {HttpModule} from '@angular/http';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { NgZone } from '@angular/core';
import { ImagefilterPipe } from './imagefilter.pipe';
import {AngularFireStorage} from 'angularfire2/storage'; 

 const ROUTES: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'explore', component:ExploreComponent},
  {path:'submit',component: SubmitComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ContactComponent,
    HomeComponent,
    ExploreComponent,
    SubmitComponent,
    ImagefilterPipe
  ],
  imports: [
    BrowserModule, FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(), FormsModule, RouterModule.forRoot(ROUTES), ReactiveFormsModule, MatDialogModule, BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule,
    AngularFirestoreModule, AngularFireAuthModule, CommonModule
  ],
  entryComponents: [SignUpComponent, LoginComponent],
  providers: [AngularFirestore, AuthService, AngularFireStorage, AuthGuard,],
  bootstrap: [AppComponent]
})

export class AppModule { }
