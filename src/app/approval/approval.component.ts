import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as $ from 'jquery'
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {

  constructor(public data: DataService, public router: Router) { }
  answer = []
  parentId = []

  ngOnInit() {
    $('#home').click(function () {
      $(location).attr('href', 'dashboard')
    })
    $('#logout').click(function () {
      $(location).attr('href', 'login')
    })
    this.getanswer()
  }
  getanswer() {
    this.data.getAnswer().subscribe(data => {
      for (let i = 0; i < data['data'].length; i++) {
        this.answer.push(data['data'][i])
        console.log(data['data'][i])
      }
      this.answer = this.answer.reverse()
    })
  }
  home() {
    this.router.navigate(['dashboard'])
  }
  approve(id) {
    this.data.approve(id).subscribe(resp => {
      console.log(resp)
    })
  }
  reject(id) {
    this.data.reject(id).subscribe(resp => {
      console.log(resp)
    })
  }

}
