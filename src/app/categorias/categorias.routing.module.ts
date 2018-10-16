import { CategoriaDetailComponent } from './categoria-detail/categoria-detail.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriasComponent } from './categorias.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const categoriasRoutes: Routes = [
  { path: 'categorias', component: CategoriasComponent },
  { path: 'categorias/novo', component: CategoriaFormComponent },
  { path: 'categorias/:id', component: CategoriaDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(categoriasRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CategoriasRoutingModule { }
