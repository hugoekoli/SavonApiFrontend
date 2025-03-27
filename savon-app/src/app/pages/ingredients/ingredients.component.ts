import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../../services/recette.service';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent implements OnInit {
  ingredients: any[] = [];

  constructor(private ingredientService: IngredientService) {}

  ngOnInit(): void {
    this.loadIngredients();
  }

  loadIngredients(): void {
    this.ingredientService.getAllIngredients().subscribe(
      (data: any[]) => {
        this.ingredients = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des ingrédients', error);
      }
    );
  }
}
