import { DataStoregeService } from './../data-storege.service';

import { Recipe } from './../models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
 
  constructor(private dbservice:DataStoregeService) { }

  ngOnInit() {
   this.dbservice.getRecipe();
  }

}
