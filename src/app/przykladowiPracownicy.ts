import { PRACOWNIK } from './PRACOWNIK';

export const przykladowiPracownicy: PRACOWNIK[] = [
  {
    imie: 'Jan',
    nazwisko: 'Kowalski',
    zadania: [
      {
        tresc: 'Zadanie pierwsze',
        status: 'W toku',
      },
      {
        tresc: 'Zadanie drugie',
        status: 'Zakończone',
      },
    ],
  },
  {
    imie: 'Jan',
    nazwisko: 'Nowak',
    zadania: [
      {
        tresc: 'Zadanie trzecie',
        status: 'Nie rozpoczęte',
      },
    ],
  },
];

