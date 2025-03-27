import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Importez le composant Home
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RecetteIndexComponent } from './pages/recette-index/recette-index.component';

const routes: Routes = [
  { path: '', component: HomeComponent },{ path: 'ingredients', component: IngredientsComponent },{ path: 'recettes', component: RecetteIndexComponent },
  { path: 'recettes/create', component: RecetteCreateComponent}  // Route pour la page d'accueil
  // Ajoutez d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  private apiURL = 'http://localhost:8080/api-savon/v1';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer tous les ingrédients
  getAllIngredients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/ingredients`);
  }
}