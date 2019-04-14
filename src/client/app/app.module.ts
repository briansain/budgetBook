import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';

import { MatDividerModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatButtonModule, MatDialogModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipeNewComponent } from './components/recipe-new/recipe-new.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { LayoutModule } from '@angular/cdk/layout';

const routes: Routes = [
  { path: '', component: RecipeBookComponent },
  { path: 'recipes', component: RecipeBookComponent },
  { path: 'recipe/new', component: RecipeNewComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'recipe/:id/edit', component: RecipeEditComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeBookComponent,
    RecipeEditComponent,
    RecipeNewComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports : [
    RouterModule
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  providers: [ HttpClient ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
