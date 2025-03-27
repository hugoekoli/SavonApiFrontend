import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../../services/recette.service';
import { RecetteDID } from '../../models/recette-did.model';

@Component({
  selector: 'app-recette-index',
  templateUrl: './recette-index.component.html',
  styleUrls: ['./recette-index.component.scss']
})
export class RecetteIndexComponent implements OnInit {
  recettes: RecetteDID[] = [];

  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
    this.loadRecettes();
  }

  loadRecettes(): void {
    this.recetteService.REMAllRecettes().subscribe({
      next: (data) => this.recettes = data,
      error: (err) => console.error('Erreur chargement recettes', err)
    });
  }

  deleteRecette(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette recette?')) {
      this.recetteService.DeleteRecette(id).subscribe({
        next: () => this.loadRecettes(), // Recharge la liste après suppression
        error: (err) => console.error('Erreur suppression', err)
      });
    }
  }
}