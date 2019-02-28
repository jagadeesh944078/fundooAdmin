import { Injectable } from '@angular/core';
import {note}from '../models/note.module';
import {HttpHeaders,HttpClient} from '@angular/common/http';


const httpOptions = {

  headers: new HttpHeaders({'Content-Type': 'application/json' ,
  'token':localStorage.getItem('jwtToken')}
  )};
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }
  private userUrl = 'http://localhost:4200/addNotes';

  public createNote(note: note) :any {
    console.log(this.userUrl+'addNote');
    console.log("local ",localStorage.getItem('jwtToken'))
    console.log("header ",httpOptions.headers.get('token'));

    httpOptions.headers.set('token',localStorage.getItem('jwtToken'));
    console.log("after ",httpOptions.headers.get('token'));

    return this.http.post<note>(this.userUrl+'addNote',note,httpOptions);
   
  }
 

}
