import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-form-td',
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './item-form-td.component.html',
  styleUrl: './item-form-td.component.scss'
})
export class ItemFormTDComponent {
  @Output() formSubmit = new EventEmitter<any>();

  model = {
    name: '',
    description: '',
    price: ''
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    if (this.isFormValid()) {
      this.formSubmit.emit({
        name: this.model.name,
        description: this.model.description,
        price: parseFloat(this.model.price)
      });
      this.resetForm();
    }
  }

  isFormValid(): boolean {
    return this.model.name.length >= 3 && 
           this.model.description.length >= 10 &&
           !isNaN(parseFloat(this.model.price)) &&
           parseFloat(this.model.price) > 0;
  }

  resetForm() {
    this.model = {
      name: '',
      description: '',
      price: ''
    };
    this.submitted = false;
  }
}
