import { Ingredient } from './indredient.model';
export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:Ingredient[];



    constructor(name:string,desc:string,imgPath:string,ing:Ingredient[]){
        this.name=name;
        this.imagePath=imgPath;
        this.description=desc;  
        this.ingredients=ing;  
    }
}