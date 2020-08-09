import { DropdownDirective } from './shared/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipiesListComponent } from './recipies/recipies-list/recipies-list.component';
import { RecipiesDetailComponent } from './recipies/recipies-detail/recipies-detail.component';
import { RecipiesItemComponent } from './recipies/recipies-list/recipies-item/recipies-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipiesService } from './recipies/recipies.service';
import { Route, RouterModule } from '@angular/router';
import { HighLightDirective } from './directives/high-light.directive';

const routes: Route[] = [
  {
    path: 'recipe',
    component: RecipiesComponent,
  },
  {
    path: 'list',
    component: ShoppingListComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'recipe',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipiesListComponent,
    RecipiesDetailComponent,
    RecipiesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [ShoppingListService, RecipiesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
