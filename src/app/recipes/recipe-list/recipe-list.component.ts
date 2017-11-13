import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe1', 'This is simply a test1', 'https://i2.wp.com/www.110pounds.com/wp-content/uploads/2010/12/rec.gif'),
    new Recipe('A test recipe2', 'This is simply a test2', 'https://i2.wp.com/www.110pounds.com/wp-content/uploads/2010/12/rec.gif')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log('rajesh');
    this.selectedRecipe.emit(recipe);
  }
}
