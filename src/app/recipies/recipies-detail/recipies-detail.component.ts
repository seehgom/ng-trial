import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipiesService } from '../recipies.service';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipies-detail',
  templateUrl: './recipies-detail.component.html',
  styleUrls: ['./recipies-detail.component.scss'],
})
export class RecipiesDetailComponent implements OnInit {
  @Input()
  recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    debugger;
    this.shoppingListService.updateIngredients({
      update: 'Bulk_Add',
      bulk_ingredients: ingredients,
    });
  }
}
