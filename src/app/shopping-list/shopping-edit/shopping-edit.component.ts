import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  addIngredient(
    ingredientName: HTMLInputElement,
    ingredientAmount: HTMLInputElement
  ) {
    this.shoppingListService.updateIngredients({
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
    this.shoppingListService.updateIngredients({
      update: 'Delete',
      ingredient: new Ingredient(
        ingredientName.value,
        ingredientAmount.valueAsNumber
      ),
    });
  }

  clearIngredients() {
    this.shoppingListService.updateIngredients({ update: 'Clear' });
  }
}
