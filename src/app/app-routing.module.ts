import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {path: '', loadChildren: './admin/admin.module#AdminModule'},

{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//#AdminModule
// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { AutomobilesComponent} from './dashboard/automobiles/automobiles.component';
//  const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'automobiles', component: AutomobilesComponent },
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: '**', component: PageNotFoundComponent }


// ]

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
