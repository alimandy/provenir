import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutomobilesComponent} from './automobiles/automobiles.component';


@NgModule({
  declarations: [AutomobilesComponent,LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }