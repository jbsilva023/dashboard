import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosComponent } from './produtos.component';
import { ProdutoDetailComponent } from './produto-detail/produto-detail.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';

const produtosRoutes: Routes = [
  {path: 'produtos', component: ProdutosComponent},
  {path: 'produtos/novo', component: ProdutoFormComponent},
  {path: 'produtos/:id/editar', component: ProdutoDetailComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(produtosRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ProdutosRoutingModule { }
