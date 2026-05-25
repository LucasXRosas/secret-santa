import { Routes } from '@angular/router';

import { RecipeList } from './recipe-list/recipe-list';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { AddRecipe } from './add-recipe/add-recipe';

export const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'add-recipe', component: AddRecipe },
  { path: 'recipes', component: RecipeList, children: [
    { path: ':id', component: RecipeDetail }
  ]},
];
