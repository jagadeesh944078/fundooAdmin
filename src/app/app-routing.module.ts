import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { from } from 'rxjs';
import { ApprovalComponent } from './approval/approval.component';
import { AuthGuard } from './service/auth/auth.guard';

const routes: Routes = [  { path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path:'dashboard',component:DashboardComponent,canActivate : [AuthGuard]},
{ path:'approval',component:ApprovalComponent},


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
