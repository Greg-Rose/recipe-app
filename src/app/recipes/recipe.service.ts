import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.getRecipes());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());
  }
}
