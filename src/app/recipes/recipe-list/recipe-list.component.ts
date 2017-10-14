import { RecipeService } from '../../servces/recipe.service';



import { Recipe } from '../../models/recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSeleted=new EventEmitter<Recipe>();
  recipes:Recipe[];
  constructor(private recipeService:RecipeService) {
    this.recipes = recipeService.getRecipes();
   }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSeleted.emit(recipe);

  }
}
