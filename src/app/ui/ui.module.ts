import { CustomMaterializeModuleModule } from './../custom-materialize-module/custom-materialize-module.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ProdutosModule } from './../produtos/produtos.module';
import { AppRoutingModule } from './../app.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProdutosModule,
    CustomMaterializeModuleModule,
    AppRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, LayoutComponent],
  exports: [HeaderComponent, FooterComponent, LayoutComponent]
})
export class UiModule { }
