import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FullcalenderComponent } from './fullcalender/fullcalender.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterialApp';
  constructor(public dialog: MatDialog) { }
  openCalendarDialog(): void {
   this.dialog.open(FullcalenderComponent, {
    });
}
}