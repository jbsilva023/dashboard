import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiModule } from './ui/ui.module';
import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';
import { AppRoutingModule } from './app.routing.module';
import { ProdutosRoutingModule } from './produtos/produtos.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    ProdutosModule,
    AppRoutingModule,
    ProdutosRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
