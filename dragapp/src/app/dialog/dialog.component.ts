import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  toDoItem = '';

  constructor(public dialogRef: MatDialogRef<DialogComponent>, ) { }


  ngOnInit() {
  }

  submit(): void {
    this.dialogRef.close(this.toDoItem);
  }


}
