import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecetteDID } from '../models/recette-did.model'; // Ajustez le chemin selon votre structure

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  private apiUrl = 'api/recettes'; // Ajustez l'URL de votre API

  constructor(private http: HttpClient) { }

  // Récupère toutes les recettes
  REMAllRecettes(): Observable<RecetteDID[]> {
    return this.http.get<RecetteDID[]>(this.apiUrl);
  }

  // Récupère une recette par ID
  REMRecettesAId(id: number): Observable<RecetteDID> {
    return this.http.get<RecetteDID>(`${this.apiUrl}/${id}`);
  }

  // Enregistre une nouvelle recette
  REMRecettesD0(recette: RecetteDID): Observable<RecetteDID> {
    return this.http.post<RecetteDID>(this.apiUrl, recette);
  }

  // Modifie une recette existante
  REMRecettesD0Update(id: number, recette: RecetteDID): Observable<RecetteDID> {
    return this.http.put<RecetteDID>(`${this.apiUrl}/${id}`, recette);
  }

  // Supprime une recette
  DeleteRecette(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}