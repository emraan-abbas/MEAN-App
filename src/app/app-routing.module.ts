import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component'

const routes: Routes = [
  {
    path:" ",
    component: AppComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
