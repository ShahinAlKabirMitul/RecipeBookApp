import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeBookApp';
  lodedFeature='recipe';
  onNavigate(featere:string){
    this.lodedFeature=featere;
  }
}
