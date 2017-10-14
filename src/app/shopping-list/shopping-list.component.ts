import { Ingredient } from './../models/indredient.model';
import { ShoppingListService } from '../servces/shopping-list.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
   this.ingredients=  this.shoppingService.getIngredient();
   this.shoppingService.ingredientChanged.subscribe(
     (ingredients:Ingredient[])=>{
      this.ingredients=ingredients;
     }
   )
  }
 
}
