import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipiesService } from '../recipies.service';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.scss'],
})
export class RecipiesListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipiesService: RecipiesService) {}

  ngOnInit(): void {
    this.recipes = this.recipiesService.getState().recipies;
  }

  recipeSelected(recipe: Recipe, $event: MouseEvent) {
    this.recipiesService.selectARecipe(recipe);
  }
}
