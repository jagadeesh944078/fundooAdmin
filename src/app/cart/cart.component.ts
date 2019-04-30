import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
declare var $: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cartlist=[];
array=[];
  constructor(public data:DataService) { }

  ngOnInit() {
    $('#home').click(function () {
      $(location).attr('href', 'dashboard')
    })
    $('#logout').click(function () {
      $(location).attr('href', 'login')
    })
   var id =localStorage.getItem('token')
   this.getUserlist()
}
getUserlist(){
this.data.userCart().subscribe(data=>{
console.log(data);     
 for(let i=0;i<data['data'].length;i++){
  this.cartlist.push(data['data'][i])
  console.log(this.cartlist,"cartlist")
}
})
}
confirm(array){
  this.data.confirmorder({"cartId":array.id}).subscribe(data=>{
  console.log(data)
  for(var i=0; i<this.cartlist.length;i++)
  this.cartlist.splice(i,1)
  })
}
}