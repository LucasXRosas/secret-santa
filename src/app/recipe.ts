import { Injectable, signal } from '@angular/core';
import { RecipeModel } from './models';

@Injectable({
  providedIn: 'root'
})
export class Recipe {
  private readonly baseUrl = 'http://localhost:3000/recipes';
  
  // State
  readonly recipes = signal<RecipeModel[]>([]);
  readonly loading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  constructor() {
    this.loadRecipes();
  }

  async loadRecipes(): Promise<void> {
    this.loading.set(true);
    this.error.set(null);
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) throw new Error('Failed to fetch recipes');
      const data: RecipeModel[] = await response.json();
      this.recipes.set(data);
    } catch (err: any) {
      this.error.set(err.message || 'Unknown error occurred');
    } finally {
      this.loading.set(false);
    }
  }

  async getRecipeById(id: string): Promise<RecipeModel | undefined> {
    // Check cache first
    const cached = this.recipes().find(r => r.id === id);
    if (cached) return cached;

    // Fetch if not in cache
    this.loading.set(true);
    this.error.set(null);
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) throw new Error(`Recipe with id ${id} not found`);
      const recipe: RecipeModel = await response.json();
      return recipe;
    } catch (err: any) {
      this.error.set(err.message || 'Unknown error occurred');
      return undefined;
    } finally {
      this.loading.set(false);
    }
  }

  async addRecipe(newRecipe: Omit<RecipeModel, 'id'>): Promise<void> {
    this.loading.set(true);
    this.error.set(null);
    try {
      // In json-server, id will be automatically generated if omitted, but we need to type it
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecipe)
      });
      if (!response.ok) throw new Error('Failed to add recipe');
      const addedRecipe: RecipeModel = await response.json();
      
      // Update local state to reflect the addition immediately
      this.recipes.update(recipes => [...recipes, addedRecipe]);
    } catch (err: any) {
      this.error.set(err.message || 'Unknown error occurred');
      throw err;
    } finally {
      this.loading.set(false);
    }
  }
}
