import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {
  compose,
  eqProps,
  equals,
  filter,
  find,
  findIndex,
  lens,
  lensIndex,
  lensPath,
  lensProp,
  not,
  over,
  reject,
  set,
} from 'ramda';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() {}

  ngOnInit(): void {}

  updateIngredients($event: { update: string; ingredient?: Ingredient }) {
    const { update, ingredient } = $event;
    switch (update) {
      case 'Add':
        this.ingredients = [...this.ingredients, ingredient];
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
  }
}
