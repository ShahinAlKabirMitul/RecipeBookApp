import { Ingredient } from './../models/indredient.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
  public ingredientChanged=new EventEmitter<Ingredient[]>(); 
  private ingredients:Ingredient[]=[
    new Ingredient('Apple',5),
    new Ingredient('Orange',55),
    new Ingredient('Benana',15)
  ];
  constructor() { }

  getIngredient(){
    return this.ingredients.slice();
  }
  save(ing:Ingredient){
    this.ingredients.push(ing);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  addIngredients( ing:Ingredient[] ){
    this.ingredients.push(...ing);
    this.ingredientChanged.emit(this.ingredients.slice());

  }
}
