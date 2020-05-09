import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Recipe } from '../../recipe';
const { log } = console;

@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.scss'],
})
export class RecipiesItemComponent implements OnInit, OnChanges, DoCheck {
  @Input() recipe: Recipe;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngDoCheck(): void {}
}
