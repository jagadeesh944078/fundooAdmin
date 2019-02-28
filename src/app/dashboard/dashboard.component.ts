import { Component, OnInit } from '@angular/core';
import { HttpService } from "../service/http.service";
import { Router } from "@angular/router";
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  basic = 0; advance = 0; char = '';
  array = []; mainArray = []; pre = '';
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('admintoken'))
    // if(localStorage.getItem('admintoken')==null){
    //   console.log('hello')
    // //  this.router.navigate['login'];
    //  this.router.navigate(['login'])
    // }
    this.getUserList();
   
  }
  values: any = '';
  // values=this.value;
  
  
  //when user hit in search button it works
  onkeypress(event: any) {
    //storing value in previous
     this.pre = this.values;
    this.values = event.target.value;
    if (this.values.length < this.pre.length) {//when user enter back space
      this.array = this.mainArray;
    }
    //method for name filtering
    var checkName = (item: any) => {
      return item.firstName.toLocaleLowerCase().match(this.values.toLocaleLowerCase());
    }
    //array filter
    this.array = this.array.filter(function (item) {
      //console.log('item',item);
      return checkName(item);
    });
    
    
  };
  //request send to http sever
  getUserList() {
    try {
      
    
    this.httpService.getRequest('user/getAdminUserList').subscribe(data => {
      this.mainArray = data['data']['data'];
      this.array = this.mainArray;
      
      for (var i = 0; i < this.array.length; i++) {
        this.char = this.array[i].service;
        if (this.char == 'basic' || this.char == 'Basic' || this.char == 'BASIC') {
          this.basic++;
        } else {
          this.advance++;
        }
      }
      console.log('basic user is ', this.basic, ' advane user is', this.advance);
  
  
    }, err => {
      console.log('error in get user list');
    });
  } catch (error) {
   console.log('error in dashboard');   
  }
  }
  
  //when user logout then logout method runs
  logout() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
