import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layoutPage/layout-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
