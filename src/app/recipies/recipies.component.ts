import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
})
export class RecipiesComponent implements OnInit {
  recipeDetailed: Recipe;

  constructor() {}

  ngOnInit(): void {}

  showRecipeDetail($event: Recipe) {
    this.recipeDetailed = $event;
  }
}
