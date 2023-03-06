import { Component, OnChanges } from '@angular/core';
import { przykladowiPracownicy } from './przykladowiPracownicy';
import { PRACOWNIK } from './PRACOWNIK';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  ngOnChanges() {
    this.pracownicy = JSON.parse(
      localStorage.getItem('pracownicy') || JSON.stringify(przykladowiPracownicy)
    );
  }
  pracownicy = pracownicy;
  wybranyPracownik: PRACOWNIK | null = null;

  wybranyPracownikReciver(pracownik: PRACOWNIK): void {
    this.wybranyPracownik = pracownik;
  }
}

export const pracownicy: PRACOWNIK[] = JSON.parse(
  localStorage.getItem('pracownicy') || JSON.stringify(przykladowiPracownicy)
);