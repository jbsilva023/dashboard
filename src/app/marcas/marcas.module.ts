import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcasComponent } from './marcas/marcas.component';
import { MarcasRoutingModule } from './marcas.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MarcasRoutingModule
  ],
  declarations: [MarcasComponent]
})
export class MarcasModule { }
