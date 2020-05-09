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
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingListService.ingredientsUpdated.subscribe(
      (ingredients) => (this.ingredients = ingredients)
    );
    this.ingredients = this.shoppingListService.getIngredients();
  }
}
