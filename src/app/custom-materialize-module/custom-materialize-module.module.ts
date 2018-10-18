import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzInputModule, MzValidationModule,  MzCardModule, MzButtonModule,
  MzIconModule, MzNavbarModule, MzDropdownModule } from 'ngx-materialize';
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
    MzNavbarModule,
    MzDropdownModule
  ],
  exports: [
    MzCardModule,
    MzInputModule,
    MzValidationModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzIconModule,
    MzNavbarModule,
    MzDropdownModule
  ],
  declarations: []
})
export class CustomMaterializeModuleModule { }
