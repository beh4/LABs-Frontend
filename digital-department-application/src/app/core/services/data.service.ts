import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data/data.json';

  constructor(private http: HttpClient) { }

  readData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl).pipe(
      catchError(error => {
        console.error('Error fetching data:', error);
        return throwError(() => new Error('Произошла ошибка при загрузке данных'));
      })
    );
  }

  readInvalidData(): Observable<Product[]> {
    return this.http.get<Product[]>('uvucyfctfxtdx');
  }
}