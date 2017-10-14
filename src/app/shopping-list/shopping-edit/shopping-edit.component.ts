import { ShoppingListService } from '../../servces/shopping-list.service';
import { Ingredient } from '../../models/indredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 
  ing:Ingredient={name:'',amount:0};
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
  }
  save(){
    console.log(this.ing);
    this.shoppingService.save(this.ing);
  }
}
