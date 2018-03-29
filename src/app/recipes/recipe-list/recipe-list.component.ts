import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "For all your testing needs.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0pGRxDUN2PyXDG1pKxaRDtlTA9vQVnQKgTBaGGK7tquPXIom"),
    new Recipe("Test Recipe", "For all your testing needs.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc0pGRxDUN2PyXDG1pKxaRDtlTA9vQVnQKgTBaGGK7tquPXIom")
  ];

  constructor() { }

  ngOnInit() {
  }

}
