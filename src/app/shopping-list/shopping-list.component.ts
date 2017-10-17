import { Subscription } from 'rxjs/Rx';
import { Ingredient } from './../models/indredient.model';
import { ShoppingListService } from '../servces/shopping-list.service';


import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients:Ingredient[];
  private subscription=new Subscription();
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
   this.ingredients=  this.shoppingService.getIngredient();
   this.subscription= this.shoppingService.ingredientChanged.subscribe(
     (ingredients:Ingredient[])=>{
      this.ingredients=ingredients;
     }
   )
   
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
 
}
