import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { DataServiceService } from '../../services/data-service.service';
// import { CreateLabelDialogComponent } from '../create-label-dialog/create-label-dialog.component';
// import { MatDialog } from '@angular/material';
// import { AppService } from '../../services/app.service';
// import { syntaxError } from '@angular/compiler';
// import { ChangeImageDialogComponent } from '../change-image-dialog/change-image-dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  raw_data
  firstCharacter = '';
  name = ''
  email = ''
  sign = false;
  shiftDiv = false;
  view=false;
  label = [];
  labels = [];
  searchData = {
    data:''
  };
  profilePicShow = false;
  profilePicData = '';
  ngOnInit() {
    
    if(this.raw_data.profilePicture != '' || this.raw_data.profilePicture != null) {
      this.profilePicShow = !this.profilePicShow;
      this.profilePicData = this.raw_data.profilePicture;
    }
    // this.raw_data.label.forEach(element => {
    //   this.labels.push(element.name);
    // });
    console.log(this.searchData.data);

  }

  name1 = "Google"
  name2 = "Keep"

  notes() {
    this.name1 = "Google"
    this.name2 = "Keep"
    this.router.navigate(['home/notes']);
    console.log(this.raw_data);
    
  }

  reminders() {
    this.name1 = "Reminders"
    this.name2 = ""
    this.router.navigate(['home/reminders']);
  }

  archive() {
    this.name1 = "Archive"
    this.name2 = ""
    this.router.navigate(['home/archive']);
  }

  trash() {
    this.name1 = "Trash"
    this.name2 = ""
    this.router.navigate(['home','trash']);
  }

  signout() {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    this.router.navigate(['']);
  }

  signoutCard() {
    if(this.sign){
      this.sign = false;
    } else {
      this.sign = true;
    }
    this.name =  this.raw_data.name;
    this.email = this.raw_data.email;
  } 

}