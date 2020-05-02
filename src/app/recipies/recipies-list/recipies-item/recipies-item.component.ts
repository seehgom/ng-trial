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

  constructor() {
    log(this.constructor.name + '=>constructor');
  }

  ngOnInit(): void {
    log(
      this.constructor.name +
        '=>ngOnInit::recipe=' +
        JSON.stringify(this.recipe)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    log(
      this.constructor.name + '=>ngOnChanges{' + JSON.stringify(changes) + '}'
    );
  }

  ngDoCheck(): void {
    log(this.constructor.name + '=>ngDoCheck');
  }
}
