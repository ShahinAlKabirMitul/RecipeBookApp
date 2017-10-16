import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from './../../servces/recipe.service';
import { Recipe } from './../../models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe:Recipe;
  id:number;
  constructor(private recipeServie:RecipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe( (s :Params) =>{
      this.id=+s['id'];
      console.log(this.id);
      this.recipe=this.recipeServie.getRecipeById(this.id);
      console.log(this.recipe);
    })
  }
  onAddToShoppingList(){
   this.recipeServie.addRecipeIngedientsToShoppingList(this.recipe.ingredients);
  }
  onEditClick(){
    //this.router.navigate(['recipes/'+this.id+"/edit"]);
    this.router.navigate(['edit'],{relativeTo:this.route});

  }
}
