import { RecipeService } from './../../../servces/recipe.service';
import { Recipe } from './../../../models/recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipes')recipes:Recipe;
 
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
  onSelected(){
    this.recipeService.recipeSelect.emit(this.recipes);
  }
}
