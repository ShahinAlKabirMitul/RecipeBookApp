
import { Recipe } from '../../models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe('A Recipe','This is simply test','https://get.pxhere.com/photo/dish-meal-food-salad-spring-red-vegetable-corn-plate-recipe-yellow-healthy-eat-lunch-cuisine-delicious-rice-pan-cook-asian-food-fry-up-wok-dish-wok-cool-image-garnish-nutrition-vegetables-court-cool-photo-oil-vegetarian-food-asparagus-gastronomy-paprika-spring-onion-foodfoto-vegetable-pan-halloumi-diet-food-1410966.jpg'),
    new Recipe('A Recipe','This is simply test','https://get.pxhere.com/photo/dish-meal-food-salad-spring-red-vegetable-corn-plate-recipe-yellow-healthy-eat-lunch-cuisine-delicious-rice-pan-cook-asian-food-fry-up-wok-dish-wok-cool-image-garnish-nutrition-vegetables-court-cool-photo-oil-vegetarian-food-asparagus-gastronomy-paprika-spring-onion-foodfoto-vegetable-pan-halloumi-diet-food-1410966.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
