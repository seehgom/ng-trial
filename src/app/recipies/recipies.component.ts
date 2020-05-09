import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipiesService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
})
export class RecipiesComponent implements OnInit {
  recipeDetailed: Recipe;

  constructor(private recipiesService: RecipiesService) {}

  ngOnInit(): void {
    this.recipiesService.selectedRecipe.subscribe(
      (recipe: Recipe) => (this.recipeDetailed = recipe)
    );
  }
}
