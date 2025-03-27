import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecettesPageComponent } from './pages/recettes-page/recettes-page.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { PrivacyPolicyComponentCssComponent } from './pages/privacy-policy.component.css/privacy-policy.component.css.component';
import { HttpClientModule } from '@angular/common/http';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { IngredientListComponent } from './shared/ingredient-list/ingredient-list.component';
import { IngredientFormComponent } from './shared/ingredient-form/ingredient-form.component';
import { IngredientImportExportComponent } from './shared/ingredient-import-export/ingredient-import-export.component';
import { IngredientManagerPageComponent } from './pages/ingredient-manager-page/ingredient-manager-page.component';
import { FormsModule } from '@angular/forms';
import { ModalBoxConfirmationComponent } from './shared/modal-box-confirmation/modal-box-confirmation.component';
import { RecetteIndexComponent } from './pages/recette-index/recette-index.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RecettesPageComponent,
    RadarChartComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    PrivacyPolicyComponentCssComponent,
    IngredientsComponent,
    IngredientListComponent,
    IngredientFormComponent,
    IngredientImportExportComponent,
    IngredientManagerPageComponent,
    ModalBoxConfirmationComponent,
    RecetteIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


