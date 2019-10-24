import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomobilesComponent } from './automobiles/automobiles.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from  './admin.guard';

const routes: Routes = [
    
      { path: '', redirectTo: 'login', pathMatch: 'full' },

    {
        path: 'login',
        component: LoginComponent

    },   { 
                path: 'automobiles', 
                component: AutomobilesComponent, 
                canActivate: [AdminGuard]
            }


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }