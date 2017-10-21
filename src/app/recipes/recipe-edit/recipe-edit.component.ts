import { Subscription } from 'rxjs/Rx';
import { Recipe } from '../../models/recipe.model';

import { FormArray, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { RecipeService } from './../../servces/recipe.service';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit,OnDestroy {
 recipeForm:FormGroup;
 id:number;
 subscription:Subscription;
 editMode=false;
  constructor(private route:ActivatedRoute,
    private recipeService:RecipeService,
    private router:Router,
    ) {

   }

  ngOnInit() {
    this.route.params.subscribe((parms:Params)=>{
      this.id=parms['id'];
      this.editMode=parms['id']!=null;
      this.initForm();
    })
  }
  ngOnDestroy(){

  }
  onSubmit(){
   
   
      if(this.editMode){
        this.recipeService.UpdateRecipe(this.id,this.recipeForm.value);
      }
      else{
        this.recipeService.addRecipe(this.recipeForm.value);
       
      
        
       
      }
    
  }

  addIngredient(){
    (<FormArray> this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }
  onCancel(){
    this.router.navigate(['../']);
  }
  onDeleteIngredient(i:number){
    (<FormArray> this.recipeForm.get('ingredients')).removeAt(i);
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
              'name':new FormControl(ing.name,Validators.required),
              'amount':new FormControl(ing.amount,[Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }

   }  

   this.recipeForm = new FormGroup({
     'name':new FormControl(recipeName,Validators.required),
     'imagePath':new FormControl(recipeImagePath,Validators.required),
     'description':new FormControl(recipeDescription,Validators.required),
     'ingredients':recipeIngedients
     
   });
   

 }
}
