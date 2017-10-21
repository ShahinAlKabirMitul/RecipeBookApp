import { RecipeService } from './servces/recipe.service';
import { Recipe } from './models/recipe.model';



import { Http,Response,Headers } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataStoregeService {

  constructor(private http:Http,private recipeService:RecipeService) { }
  getRecipe(){
     this.http.get('http://localhost:54527/api/recipe/GetRecipes').subscribe( (response:Response)=>{
        const recipe:Recipe[]=response.json();
        this.recipeService.setRecipe(recipe);
     } )

    
  }
  addRecipe(recipe:Recipe[]){
    console.log(recipe);
    const header=new Headers({'Content-Type':'application/json'}) 
    return this.http.post('http://localhost:54527/api/recipe/PostRecipes',recipe,{headers : header});
   }
}
