
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from './../../servces/recipe.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
 recipeForm:FormGroup;
  id:number;
 editMode=false;
  constructor(private route:ActivatedRoute,private recipeService:RecipeService) {

   }

  ngOnInit() {
    this.route.params.subscribe((parms:Params)=>{
      this.id=parms['id'];
      this.editMode=parms['id']!=null;
      this.initForm();
    })
  }
  onSubmit(){
   console.log(this.recipeForm); 
  }

  addIngredient(){
    (<FormArray> this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(),
        'amount':new FormControl()
      })
    )
  }

  private initForm(){
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    let recipeIngedients=new FormArray([]);
    if(this.editMode){
      const recipe=this.recipeService.getRecipeById(this.id);
      recipeName=recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription=recipe.description;
      
      if(recipe['ingredients']){
        for(let ing of recipe.ingredients){
          recipeIngedients.push(
            new FormGroup({
              'name':new FormControl(ing.name),
              'amount':new FormControl(ing.amount)
            })
          );
        }
      }

   }  

   this.recipeForm = new FormGroup({
     'name':new FormControl(recipeName),
     'recipeImagePath':new FormControl(recipeImagePath),
     'recipeDescription':new FormControl(recipeDescription),
     'ingredients':recipeIngedients
     
   });
   

 }
}
