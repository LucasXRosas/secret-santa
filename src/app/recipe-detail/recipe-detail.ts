import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipeModel } from '../models';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-detail',
  imports: [RouterLink],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css'
})
export class RecipeDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly recipeService = inject(Recipe);

  readonly recipe = signal<RecipeModel | undefined>(undefined);
  readonly error = signal<string | null>(null);
  protected readonly servings = signal<number>(1);

  constructor() {
    this.route.paramMap.subscribe(async params => {
      const id = params.get('id');
      if (id) {
        this.servings.set(1); // Reset servings when navigating
        try {
          const fetchedRecipe = await this.recipeService.getRecipeById(id);
          if (fetchedRecipe) {
            this.recipe.set(fetchedRecipe);
            this.error.set(null);
          } else {
            this.error.set('Recipe not found.');
          }
        } catch (e: any) {
          this.error.set(e.message || 'Error loading recipe');
        }
      }
    });
  }

  protected readonly adjustedIngredients = computed(() => {
    const currentRecipe = this.recipe();
    const currentServings = this.servings();
    if (!currentRecipe) return [];
    
    return currentRecipe.ingredients.map(ing => ({
      ...ing,
      quantity: ing.quantity * currentServings
    }));
  });

  protected incrementServings(): void {
    this.servings.update(s => s + 1);
  }

  protected decrementServings(): void {
    this.servings.update(s => s > 1 ? s - 1 : 1);
  }
}
