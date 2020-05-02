import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipies-detail',
  templateUrl: './recipies-detail.component.html',
  styleUrls: ['./recipies-detail.component.scss'],
})
export class RecipiesDetailComponent implements OnInit {
  @Input()
  recipe: Recipe;

  constructor() {}

  ngOnInit(): void {}
}
