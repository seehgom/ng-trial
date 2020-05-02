import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @Output()
  ingredientChangeEvent = new EventEmitter<{
    update: string;
    ingredient?: Ingredient;
  }>();

  constructor() {}

  ngOnInit(): void {}

  addIngredient(
    ingredientName: HTMLInputElement,
    ingredientAmount: HTMLInputElement
  ) {
    debugger;
    this.ingredientChangeEvent.emit({
      update: 'Add',
      ingredient: new Ingredient(
        ingredientName.value,
        ingredientAmount.valueAsNumber
      ),
    });
  }

  deleteIngredient(
    ingredientName: HTMLInputElement,
    ingredientAmount: HTMLInputElement
  ) {
    this.ingredientChangeEvent.emit({
      update: 'Delete',
      ingredient: new Ingredient(
        ingredientName.value,
        ingredientAmount.valueAsNumber
      ),
    });
  }

  clearIngredients() {
    this.ingredientChangeEvent.emit({ update: 'Clear' });
  }
}
