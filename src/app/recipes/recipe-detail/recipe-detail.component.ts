import { RecipeService } from './../../servces/recipe.service';
import { Recipe } from './../../models/recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('recipe')recipe:Recipe;
  constructor(private recipeServie:RecipeService) { }

  ngOnInit() {
  }
  onAddToShoppingList(){
   this.recipeServie.addRecipeIngedientsToShoppingList(this.recipe.ingredients);
  }
}
