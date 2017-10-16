import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const appRouter:Routes=[
    { path:'',redirectTo:'/recipes',pathMatch:'full'},
    { path:'recipes',component:RecipesComponent},
    { path:'shopping-list',component:ShoppingListComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(appRouter)],
    exports:[RouterModule]
 })
export class AppRoutingModule{

}