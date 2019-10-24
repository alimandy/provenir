import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import * as firebase from 'firebase/app';
import {FirebaseService} from './firebase.service';
import { User } from  'firebase';
import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

		user:User; 
		private message: string;

constructor(
        private firebaseService: FirebaseService,
        public afAuth: AngularFireAuth, 
        public  _router:  Router
    ) {}




    doLogin(value) {
        return new Promise<any>((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(value.email, value.password)
                .then(
                    res => resolve(res),
                    err => reject(err));
        });
    }

    doLogout() {
        return new Promise((resolve, reject) => {
            this.afAuth.auth.signOut()
                .then(() => {
                    this.firebaseService.unsubscribeOnLogOut();
                    resolve();
                }).catch((error) => {
                console.log(error);
                reject();
            });
        });
    }



get isLoggedIn(): boolean {
	    const  user  =  JSON.parse(localStorage.getItem('user'));
	    return  user  !==  null;
	}


  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

  
  isTokenExpired(): boolean {
    return false;
  }


decode() {
    return decode(localStorage.getItem('token'));
  }


}
