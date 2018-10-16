import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaDetailComponent } from './categoria-detail/categoria-detail.component';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoriasComponent, CategoriaFormComponent, CategoriaDetailComponent, CategoriaEditComponent]
})
export class CategoriasModule { }
