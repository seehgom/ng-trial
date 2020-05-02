import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.scss'],
})
export class RecipiesListComponent implements OnInit {
  @Output()
  expandRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is another test',
      'https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  recipeSelected(recipe: Recipe, $event: MouseEvent) {
    this.expandRecipe.emit(recipe);
  }
}
