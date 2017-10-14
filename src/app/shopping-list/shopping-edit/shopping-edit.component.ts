import { Ingredient } from '../../models/indredient.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output()IngerdientAdd=new EventEmitter<Ingredient>();
  ing:Ingredient={name:'',amount:0};
  constructor() { }

  ngOnInit() {
  }
  save(){
    console.log(this.ing);
    // let ingnew=  new Ingredient(this.ing.name,this.ing.amount);
     this.IngerdientAdd.emit(this.ing);
   //this.IngerdientAdd.emi
   // console.log(this.IngerdientAdd);
  }
}
