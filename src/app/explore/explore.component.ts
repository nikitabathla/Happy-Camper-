import { AngularFireDatabase } from 'angularfire2/database';
import { ImagefilterPipe } from './../imagefilter.pipe';
import { AuthService } from './../providers/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'], 
  
})

export class ExploreComponent implements OnInit {

  x : string = "";
  image: object[] = [];
  userName: string = "";
  logged: boolean = false;
  clicked: boolean = false;

  constructor(public db: AngularFireDatabase, private router: Router, public authService: AuthService) 
  {
    db.list('/userPosts').valueChanges().subscribe(images=>
      {
        Array.prototype.push.apply(this.image,images);
        this.image.reverse();
        
   });
   this.authService.af.auth.onAuthStateChanged((user) => {
    if (user != null) {
        this.logged= true;
        this.userName = user.displayName;
    } 
});
  }

  ngOnInit() {

  }

  func(event) {
    this.x = event.target.value;
  }
 
  onClick() {
    this.router.navigate(['/submit']);
  }

  logout() {
    this.authService.logout().then((res) => {
      this.router.navigate(['']);
  })
  }
  
  /*likedButton(img) {
    this.clicked = true;
    var url = img.src;
    var x = this.db.list('/userPosts',

  ref => ref.orderByChild('url').equalTo(url));
 

  x.snapshotChanges().first().subscribe(

    (datas) => { 
      var keys  = datas[0]['key'];
      var obj = x.valueChanges().first().subscribe((z) => {
        var n:number = z[0]['likes'];
       firebase.database().ref('/userPosts/'+keys).update({
         'likes' : n+1
      });
      });

    });
  }*/
}