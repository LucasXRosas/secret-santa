import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RecipeModel } from '../models';
import { Recipe } from '../recipe';
import { DifficultyBadgePipe } from '../difficulty-badge-pipe';

@Component({
  selector: 'app-recipe-list',
  imports: [FormsModule, RouterLink, DifficultyBadgePipe, RouterOutlet],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  protected readonly recipeService = inject(Recipe);
  
  protected readonly searchTerm = signal<string>('');

  protected readonly filteredRecipes = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const allRecipes = this.recipeService.recipes();
    
    if (!term) return allRecipes;
    return allRecipes.filter(r => 
      r.name.toLowerCase().includes(term) || 
      r.description.toLowerCase().includes(term)
    );
  });
}
