import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzInputModule, MzValidationModule, MzCardModule, MzButtonModule, MzIconModule, MzNavbarModule } from 'ngx-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MzCardModule,
    MzInputModule,
    MzValidationModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzIconModule,
    MzNavbarModule
  ],
  exports: [
    MzCardModule,
    MzInputModule,
    MzValidationModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzIconModule,
    MzNavbarModule
  ],
  declarations: []
})
export class CustomMaterializeModuleModule { }