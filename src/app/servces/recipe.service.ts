import { DataStoregeService } from './../data-storege.service';

import { Subject } from 'rxjs/Rx';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../models/indredient.model';
import { Recipe } from './../models/recipe.model';
import {  Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
 public recipeSelect=new Subject<Recipe>();
 recipeChanged=new Subject<Recipe[]>();
 constructor(private shoppingService:ShoppingListService){}
 private recipes:Recipe[]=[];
// //  =[
// //     new Recipe('Fried chicken ',
// //     'This is simply test',
// //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxNslMoEQlniCTNiK3jw5EKMvuozLSedJtiT3yW3w7Gmj40gqbmw',
// //     [
// //       new Ingredient("Chicken",1),
// //       new Ingredient("Flour",10)
// //     ]),
// //     new Recipe('BURGER',
// //     'This is simply test',
// //     'http://www.seriouseats.com/recipes/assets_c/2013/09/20130909-ramen-hacks-new-burger-03-610px-thumb-625xauto-351448.jpg',
// //     [
// //       new Ingredient("Egg",1),
// //       new Ingredient("Onion",10)
// //     ])
// //   ];
  
  getRecipeById(index:number){
    console.log(this.recipes);
    return this.recipes[index];
  }
  getRecipes(){
   //this.dbService.getRecipe();
    return this.recipes.slice();
  }
  addRecipeIngedientsToShoppingList(ing:Ingredient[]){
    this.shoppingService.addIngredients(ing);

  }

  setRecipe(recipes:any){
  
  let recipesNew=[];
   for(let r of recipes){
    
    let ing:Ingredient[]=[];
    
    for(var i of r['Ingredients']){
     ing.push( new Ingredient(i['Name'],i['Amount']) )
    }

    recipesNew.push(new Recipe(r['Name'],r['Description'],r['ImagePath'],ing ))

   }
   

    this.recipes=recipesNew;
    // recipes.data['value'] as Recipe[]
   this.recipeChanged.next(this.recipes.slice());
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    console.log(this.recipes);
    this.recipeChanged.next(this.recipes.slice());
    
  }
  UpdateRecipe(index:number,recipe:Recipe){
    this.recipes[index]=recipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }
  
}
