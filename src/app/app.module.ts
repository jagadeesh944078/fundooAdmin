import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { from } from 'rxjs';
import { IconListComponent } from './icon-list/icon-list.component';
import { MainNoteComponent } from './main-note/main-note.component';
import { NoteComponent } from './note/note.component';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { ApprovalComponent } from './approval/approval.component';
import { SearchPipe } from './search/search.pipe';
import {AuthGuard}  from './service/auth/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    IconListComponent,
    MainNoteComponent,
    NoteComponent,
    DisplayComponentComponent,
    ApprovalComponent,
    SearchPipe,
  
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
