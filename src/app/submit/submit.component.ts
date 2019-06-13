import { AngularFireDatabase } from 'angularfire2/database';
import { NewImage } from './../new-image';
import { AuthService } from './../providers/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FroalaEditorDirective } from '../../../node_modules/angular-froala-wysiwyg';
import {AngularFireStorage} from 'angularfire2/storage';
import * as firebase from 'firebase';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  selectedFile = null;
  url: string = "";
  option: string = ";"
  newImage: object = {};
  userName:string = "";
  logged: boolean = false;
  likes: number = 0;

  constructor(public authService: AuthService, private router: Router, private storage: AngularFireStorage) { 
    this.authService.af.auth.onAuthStateChanged((user) => {
      if (user != null) {
        
          this.logged= true;
          this.userName = user.displayName;
          
        
      } 
  });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().then((res) => {
      this.router.navigate(['/']);
  }) 
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    }
  
    display(option) {
      this.option = option.value;
    } 
    onUpload() {
      
       const uniqueKey = 'pic' + Math.floor(Math.random() * 1000000);
      
      const ref = this.storage.ref('/angfire2store/'+uniqueKey);
      const task = ref.put(this.selectedFile);
      task.then((snapshot) => {
       return snapshot.ref.getDownloadURL();
      })
      .then((url) => {
        this.url = url;
        this.newImage = new NewImage(this.url, this.option,this.likes);
        firebase.database().ref('userPosts').push(this.newImage);
        alert('Thanks for sharing your work!');
        this.router.navigate(['/explore']);
        

      })
      .catch(console.log);
    }
  }

