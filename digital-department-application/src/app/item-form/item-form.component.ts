import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent {
  @Output() formSubmit = new EventEmitter<any>();

  itemForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200)
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.min(0.01),
      Validators.max(10000)
    ])
  });

  onSubmit() {
    if (this.itemForm.valid) {
      this.formSubmit.emit(this.itemForm.value);
      this.itemForm.reset();
    }
  }

  get name() { return this.itemForm.get('name'); }
  get description() { return this.itemForm.get('description'); }
  get price() { return this.itemForm.get('price'); }
}
