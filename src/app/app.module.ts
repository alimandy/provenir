import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module'; 

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    AdminModule, 
     AngularFireModule.initializeApp(environment.firebase), // imports firebase/app
      AngularFirestoreModule, // imports firebase/firestore
      AngularFireAuthModule, // imports firebase/auth
      AngularFireStorageModule // imports firebase/storage
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
