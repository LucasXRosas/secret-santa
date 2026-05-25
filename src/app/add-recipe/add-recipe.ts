import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-add-recipe',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './add-recipe.html',
  styleUrl: './add-recipe.css'
})
export class AddRecipe {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly recipeService = inject(Recipe);
  private readonly router = inject(Router);

  protected readonly recipeForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    imgUrl: ['https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&auto=format&fit=crop&q=60'],
    difficulty: ['facil', Validators.required]
  });

  protected async onSubmit(): Promise<void> {
    if (this.recipeForm.valid) {
      try {
        const formValue = this.recipeForm.getRawValue();
        await this.recipeService.addRecipe({
          name: formValue.name,
          description: formValue.description,
          imgUrl: formValue.imgUrl,
          difficulty: formValue.difficulty as 'facil' | 'medio' | 'dificil',
          isFavorite: false,
          ingredients: []
        });
        this.router.navigate(['/recipes']);
      } catch (error) {
        console.error('Failed to add recipe:', error);
      }
    }
  }
}
