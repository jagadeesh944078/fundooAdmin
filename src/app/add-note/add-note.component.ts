import { Component, OnInit } from '@angular/core';
import { note } from '../models/note.module';
import { NoteService } from '../service/note.service';
import { MatSnackBar } from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  barshow:boolean=false;
  showIcon : boolean=true;
  showBrush : boolean = true;
  constructor(private router : Router ,private notecrud : NoteService , private snackBar : MatSnackBar) { }
  noteref : note =new note 
   


  ngOnInit() {
    this.showBrush=!this.showBrush
  }
  fullCardShow()
  {
    this.barshow=!this.barshow;
  }
  close() : void {
    
    console.log("http://localhost:4200/addNotes")
    console.log(this.noteref.title);
    console.log(this.noteref.description);
    this.barshow=!this.barshow;
    this.showIcon=false;
    console.log(this.noteref);
    if(this.noteref.title!=undefined)
       {
  
  (this.notecrud.createNote(this.noteref)).subscribe(
    
    data => { 
      console.log(data.statusMessage,data.statusCode)
      if(data.statusCode== 166)
      {
          this.snackBar.open('Note Added Successfully', '', {
            duration: 2000,});
            this.router.navigate(['home']);
      }
     },
      
     error => {
      this.snackBar.open("alreadyExist","Register Fails",{
        duration:2000,})
         console.log("Error", error);
     }

    );
     
}
else
{
  this.showIcon=true
  
}
}

  }


