export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;


    constructor(name:string,desc:string,imgPath:string){
        this.name=name;
        this.imagePath=imgPath;
        this.description=desc;    
    }
}