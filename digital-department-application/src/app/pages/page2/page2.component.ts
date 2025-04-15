import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService, Product } from '../../core/services/data.service';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-page2',
  imports: [CommonModule, RouterModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {
  items$: Observable<Product[]>;
  error: string | null = null;
  
  constructor(private router: Router, private dataService: DataService) {
    this.items$ = this.dataService.readData().pipe(
      catchError(error => {
        console.error('Error loading data:', error);
        this.error = 'Не удалось загрузить данные. Пожалуйста, попробуйте позже.';
        return of([]);
      })
    );

    this.dataService.readInvalidData().subscribe();
  }

  goMain(){
    this.router.navigateByUrl("/")
  }
}
