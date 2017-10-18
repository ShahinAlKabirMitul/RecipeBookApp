

import { NgForm } from '@angular/forms/src/directives';
import { Subscription } from 'rxjs/Rx';
import { ShoppingListService } from '../../servces/shopping-list.service';
import { Ingredient } from '../../models/indredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  subscription:Subscription;
  editMode=false;
  editItemIdex:number;

  ing:Ingredient={name:'',amount:0};
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
      this.subscription=this.shoppingService.startEditing.subscribe((index:number)=>{
      this.editItemIdex=index;
      this.editMode=true;
      this.ing=this.shoppingService.getIngredientnyId(index);

    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onSubmit(form:NgForm){
   const value=form.value;
   this.ing=new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingService.edit(new Ingredient(value.name,value.amount),this.editItemIdex);
    }else{
      this.shoppingService.save(new Ingredient(value.name,value.amount));
    }
    form.reset();
    this.editMode=false;
  }
}
