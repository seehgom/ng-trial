import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {
  append,
  concat,
  eqProps,
  findIndex,
  lensPath,
  reject,
  set,
} from 'ramda';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ];
  ingredientsUpdated = new EventEmitter<Ingredient[]>();
  getIngredients(): Ingredient[] {
    return [...this.ingredients];
  }
  updateIngredients($event: {
    update: string;
    ingredient?: Ingredient;
    bulk_ingredients?: Ingredient[];
  }) {
    const { update, ingredient, bulk_ingredients } = $event;
    switch (update) {
      case 'Add':
        this.ingredients = [...this.ingredients, ingredient];
        break;
      case 'Bulk_Add':
        this.ingredients = concat(this.ingredients, bulk_ingredients);
        break;
      case 'Delete':
        this.ingredients = reject(
          eqProps('name', ingredient),
          this.ingredients
        );
        break;
      case 'Update':
        const lensForIngredientAmount = lensPath([
          findIndex(eqProps('name', ingredient))(this.ingredients),
          'ingredient',
        ]);
        this.ingredients = set(
          lensForIngredientAmount,
          ingredient,
          this.ingredients
        );
        break;
      case 'Clear':
        this.ingredients = [];
        break;
    }
    this.ingredientsUpdated.emit([...this.ingredients]);
  }
}
