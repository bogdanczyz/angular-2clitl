import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { pracownicy } from '../app.component';
import { PRACOWNIK } from '../PRACOWNIK';
import { NowyPracownikComponent } from './nowy-pracownik/nowy-pracownik.component';

@Component({
  selector: 'app-pracownicy',
  templateUrl: './pracownicy.component.html',
  styleUrls: ['./pracownicy.component.css'],
})


export class PracownicyComponent {

  constructor(public dialog: MatDialog) {}

  pracownicy = pracownicy;
  wybranyPracownik: PRACOWNIK[] | undefined;
  @Output() wybranyPracownikEmitter = new EventEmitter();


  ngOnInit() {
  }

  WybierzPracownika(): void {
    if (this.wybranyPracownik)
      this.wybranyPracownikEmitter.emit(this.wybranyPracownik[0]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NowyPracownikComponent, {
      width: '250px',
      data: {
        firstName: '',
        lastName: '',
        position: '',
        tasks: [],
        finishedTasks: [],
      },
    });
}
}

