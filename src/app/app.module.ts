import { CategoriasModule } from './categorias/categorias.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiModule } from './ui/ui.module';
import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';
import { AppRoutingModule } from './app.routing.module';
import { ProdutosRoutingModule } from './produtos/produtos.routing.module';
import { CategoriasRoutingModule } from './categorias/categorias.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    ProdutosModule,
    CategoriasModule,
    AppRoutingModule,
    ProdutosRoutingModule,
    CategoriasRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
