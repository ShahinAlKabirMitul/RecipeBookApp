import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../servces/recipe.service';



import { Recipe } from '../../models/recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({  
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  
  recipes:Recipe[];
  subscription:Subscription;

  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute) {}
  
  ngOnInit() {
   this.subscription=  this.recipeService.recipeChanged.subscribe(
      (recipe:Recipe[])=>{
        this.recipes=recipe;
      }
    )
    this.recipes =this.recipeService.getRecipes();
  }
  ngOnDestroy(){
   this.subscription.unsubscribe();
  }
  newRecipeClick(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
 
}
