import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppinglistService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipesService{
  
   recipeSelected= new EventEmitter<Recipe>();

  private  recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Ingredient('chicken', 1),
        new Ingredient('buns', 3)]),
        
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [new Ingredient('Beaf', 22)])
      ];

      constructor(private slService: ShoppinglistService){}

    getService(){
      return this.recipes.slice();     // we get a copy of this Recipes Array
    }
    addIngredienttoShoppingList(ingredients:Ingredient[]){
      this.slService.addIngredients(ingredients);
    }
}