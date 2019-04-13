import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseUrl;
  static postRequest: any;
  constructor(private http: HttpClient) { }
  postRequest(url, data) {
    console.log(data);
    return this.http.post(this.baseUrl + url, data);
  }



  getRequest(url) {
    return this.http.get(this.baseUrl + url);
  }
  post(url: string, body: any): any {
    url=this.baseUrl + url;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('admintoken')
      })
    }
    return this.http.post(url, body, httpOptions)
  }


    getHttp(url){
      const httpTocken={
      headers:new HttpHeaders({
      'content-Type':'application/json',
      'Authorization':localStorage.getItem('admintoken')
      })
      }
      return this.http.get(this.baseUrl+url,httpTocken);
}
}
