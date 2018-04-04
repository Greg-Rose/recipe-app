import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "London Broil",
      "A super tasty London Broil",
      "https://upload.wikimedia.org/wikipedia/commons/3/30/London_broil.jpg",
      [
        new Ingredient("flank steak", 1),
        new Ingredient("spice packet", 1)
      ]
    ),
    new Recipe(
      "Tacos",
      "Delicious tacos!",
      "https://c1.staticflickr.com/6/5531/9055162205_8130f056fb_b.jpg",
      [
        new Ingredient("ground beef", 1),
        new Ingredient("tortillas", 10),
        new Ingredient("refried beans", 2),
        new Ingredient("salsa", 1),
        new Ingredient("avacado", 2),
        new Ingredient("sour cream", 1)
      ]
    )
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
