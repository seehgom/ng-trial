import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipiesService {
  private state = {
    recipeSelected: undefined,
    recipies: [
      new Recipe(
        'Test Recipe',
        'This is a test',
        'https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg',
        [
          new Ingredient('test ingredient1', 2),
          new Ingredient('test ingredient2', 3),
        ]
      ),
      new Recipe(
        'Another Test Recipe',
        'This is another test',
        'https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg',
        [
          new Ingredient('test ingredient4', 2),
          new Ingredient('test ingredient3', 3),
        ]
      ),
    ],
  };
  public selectedRecipe = new EventEmitter<Recipe>();
  getState() {
    return { ...this.state };
  }
  selectARecipe(recipe: Recipe) {
    this.state = { ...this.state, recipeSelected: recipe };
    this.selectedRecipe.emit(this.state.recipeSelected);
  }
}
