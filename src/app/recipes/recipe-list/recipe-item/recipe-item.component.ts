import { RecipeService } from './../../../servces/recipe.service';
import { Recipe } from './../../../models/recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipes')recipes : Recipe;
  @Input('index') index:number;
 
  constructor() { 
    console.log("Receipe Item",this.recipes);
  }

  ngOnInit() {
  }
 
}
