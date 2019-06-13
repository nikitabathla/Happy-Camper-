import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './providers/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'            
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private af: AngularFireAuth) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return true;
      
    }
}
