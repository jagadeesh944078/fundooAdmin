import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{ HomeComponent} from './home/home.component';
import{ ToolbarComponent } from './toolbar/toolbar.component'
import { from } from 'rxjs';
import { AddNoteComponent } from './add-note/add-note.component';
const routes: Routes = [  { path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path:'dashboard',component:DashboardComponent},
{ path:'home',component:HomeComponent},
{ path:'toolbar',component:ToolbarComponent,children:[{path:'addNote',component:AddNoteComponent},]}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
