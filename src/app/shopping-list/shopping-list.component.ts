import { Ingredient } from '../models/indredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient('Apple',5),
    new Ingredient('Orange',55),
    new Ingredient('Benana',15)
  ];
  constructor() { }

  ngOnInit() {
  }

}
