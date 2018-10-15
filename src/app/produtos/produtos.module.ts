import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProdutosComponent } from './produtos.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoDetailComponent } from './produto-detail/produto-detail.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ProdutosService } from './produtos.service';
import { ProdutosRoutingModule } from './produtos.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ProdutosRoutingModule
  ],
  declarations: [
    ProdutosComponent,
    ProdutoFormComponent,
    ProdutoDetailComponent,
    ProdutoEditComponent
  ],
  exports: [ProdutosComponent],
  providers: [ProdutosService]
})
export class ProdutosModule { }
