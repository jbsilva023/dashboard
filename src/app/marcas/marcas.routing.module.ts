import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarcasComponent } from './marcas/marcas.component';

const marcasRoutes: Routes = [
  {path: 'marcas', component: MarcasComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(marcasRoutes)
  ],
  exports: [RouterModule]
})
export class MarcasRoutingModule { }
