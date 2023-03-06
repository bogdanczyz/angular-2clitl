import { ZADANIE } from './ZADANIE';

export interface PRACOWNIK {
  imie: string;
  nazwisko: string;
  zadania: ZADANIE[];
}