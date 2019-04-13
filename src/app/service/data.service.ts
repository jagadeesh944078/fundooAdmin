import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpService) { }
  getAnswer(){
    return this.http.getHttp('questionAndAnswerNotes/getUnApprovedAnswer')
  }
  approve(id){
    return this.http.post('questionAndAnswerNotes/approve/'+id,'')
  }
  reject(id){
    console.log(id)
    return this.http.post('questionAndAnswerNotes/reject/'+id,'')
}
}
