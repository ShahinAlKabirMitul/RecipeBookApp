import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../servces/recipe.service';



import { Recipe } from '../../models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({  
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
  recipes:Recipe[];
  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute) {}

  ngOnInit() {
    this.recipeService.recipeChanged.subscribe(
      (recipe:Recipe[])=>{
        this.recipes=recipe;
      }
    )
    this.recipes =this.recipeService.getRecipes();
  }
  newRecipeClick(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
 
}
