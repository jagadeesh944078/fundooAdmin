import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
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
}
