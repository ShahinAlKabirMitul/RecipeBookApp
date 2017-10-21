
import { RecipeService } from './../servces/recipe.service';
import { DataStoregeService } from './../data-storege.service';

import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dbService:DataStoregeService,private recipeService:RecipeService) { }
 

  ngOnInit() {
  }
  fetchData(){
  this.dbService.getRecipe();
  }
  Save(){
    this.dbService.addRecipe(this.recipeService.getRecipes()).subscribe(p=>console.log(p));
  }
}
