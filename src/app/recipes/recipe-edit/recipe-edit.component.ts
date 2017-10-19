import { FormGroup,FormControl } from '@angular/forms';
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
 private initForm(){
   let recipeName='';
   let recipeImagePath='';
   let recipeDescription='';
   if(this.editMode){
     const recipe=this.recipeService.getRecipeById(this.id);
     recipeName=recipe.name;
     recipeImagePath=recipe.imagePath;
     recipeDescription=recipe.description;
   }  

   this.recipeForm = new FormGroup({
     'name':new FormControl(recipeName),
     'recipeImagePath':new FormControl(recipeImagePath),
     'recipeDescription':new FormControl(recipeDescription)
   });
   

 }
}
