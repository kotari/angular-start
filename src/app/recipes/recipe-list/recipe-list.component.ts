import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://i2.wp.com/www.110pounds.com/wp-content/uploads/2010/12/rec.gif'),
    new Recipe('A test recipe', 'This is simply a test', 'https://i2.wp.com/www.110pounds.com/wp-content/uploads/2010/12/rec.gif')
  ];
  constructor() { }

  ngOnInit() {
  }

}
