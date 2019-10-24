import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import {User} from '../models/user';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable, Subscription} from 'rxjs';


import {find, map, filter} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    private userCollection: AngularFirestoreCollection<User>;

    private snapshotChangesSubscription: any;
    private users: Observable<User[]>;

    constructor(
        public fireStore: AngularFirestore,
        public fireAuth: AngularFireAuth
    ) {
        this.userCollection = fireStore.collection<User>('users');

        this.users = this.userCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }


    getUsers() {
        return new Promise<any>((resolve, reject) => {
            resolve(this.users);
        });
    }

    getUser(userId: string) {
        return new Promise<any>((resolve, reject) => {
            resolve(this.userCollection.doc<User>(userId).valueChanges());
        });
    }



    removeUser(id) {
        return new Promise<any>((resolve, reject) => {
            return this.userCollection.doc(id).delete();
        });
    }


	 createUsers(data) {
        const createUserPromises: Promise<any>[] = [];

        data.forEach(user => {
            const createUserPromise = new Promise<any>((resolve, reject) => {
                firebase.auth()
                    .createUserWithEmailAndPassword(user.email, 'asdfasdf')
                    .then(
                        res => {
                            console.log(`${user.email} created successfully!`);
                            const firebaseUser = res.user;

                            user.key = firebaseUser.uid;
                            this.fireStore.collection('users').doc(firebaseUser.uid).set(user);
                            resolve();
                        },
                        err => {
                            firebase.auth().signInWithEmailAndPassword(user.email, 'asdfasdf')
                                .then(
                                    res => {
                                        console.log(`${user.email} already exists; storing to firebase`);

                                        const firebaseUser = res.user;
                                        user.key = firebaseUser.uid;
                                        this.fireStore.collection('users').doc(firebaseUser.uid).set(user);
                                        resolve();
                                    });
                        });
            });

            createUserPromises.push(createUserPromise);
        });

        return Promise.all(createUserPromises);
    }

    unsubscribeOnLogOut() {
        // unsubscribe from the snapshotChanges
        if (this.snapshotChangesSubscription.hasOwnProperty('unsubscribe')) {
            this.snapshotChangesSubscription.unsubscribe();
        }

    }
}
