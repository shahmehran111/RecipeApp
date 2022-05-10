import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppinglistService{

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      ingredientChanged= new EventEmitter<Ingredient[]>();

    getIngredients(){
        // return this.ingredients 
        return this.ingredients.slice(); // A copy on the array; 

    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients:Ingredient[]){
        // for(let ingredient of this.ingredients)
        // this.addIngredient(ingredient);
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
      }
}