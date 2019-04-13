import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatSidenavModule,MatDialogModule,MatDatepickerModule,MatChipsModule,MatExpansionModule,MatSnackBarModule,MatTooltipModule,MatListModule,MatFormFieldModule,MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatListModule,MatDialogModule,MatDatepickerModule,MatChipsModule,MatExpansionModule,MatSnackBarModule, MatTooltipModule,CommonModule,FormsModule, ReactiveFormsModule,
    MatFormFieldModule,MatSidenavModule,MatButtonModule, MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule,MatIconModule
  ],
  exports:[FormsModule,MatChipsModule,MatDatepickerModule,MatDialogModule,MatExpansionModule,MatSnackBarModule,MatTooltipModule, MatListModule,ReactiveFormsModule,
    MatFormFieldModule,MatSidenavModule,MatButtonModule, MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule
   ]

})
export class AppMaterialModule { }
