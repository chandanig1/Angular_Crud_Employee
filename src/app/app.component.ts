import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudproComponent } from './crudpro/crudpro.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crudapp';
  constructor(private _dialog: MatDialog)
  { }
    openeditdata(){
      this._dialog.open(CrudproComponent);
    }
}
