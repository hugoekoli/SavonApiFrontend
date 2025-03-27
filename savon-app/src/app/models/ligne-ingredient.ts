import { Ingredient } from "./ingredient";
import { Recette } from "./recette";

export class LigneIngredient {
    /**
     * Identifiant unique de l'association ingrédient-recette (clé primaire).
     */
    id: number | null = null;

    /**
     * Quantité en grammes (`g`) de l'ingrédient dans la recette.
     */
    quantite: number = 0;

    /**
     * Pourcentage de l'ingrédient par rapport à la masse totale du savon.
     */
    pourcentage: number = 0;

    /**
     * Ingrédient associé à cette recette.
     */
    ingredient: Ingredient | null = null;
    
    /**
     * Recette à laquelle cet ingrédient est associé.
     */
    recette: Recette | null = null;
}