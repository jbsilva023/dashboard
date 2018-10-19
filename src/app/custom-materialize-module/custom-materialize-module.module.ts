import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzInputModule, MzValidationModule,  MzCardModule, MzButtonModule,
  MzIconModule, MzNavbarModule, MzDropdownModule, MzModalModule,
  MzSidenavModule, MzPaginationModule, MzTooltipModule, MzIconMdiModule,
  MzSelectModule, MzTextareaModule } from 'ngx-materialize';
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
    MzDropdownModule,
    MzModalModule,
    MzSidenavModule,
    MzPaginationModule,
    MzTooltipModule,
    MzIconMdiModule,
    MzSelectModule,
    MzTextareaModule
  ],
  exports: [
    MzCardModule,
    MzInputModule,
    MzValidationModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzIconModule,
    MzNavbarModule,
    MzDropdownModule,
    MzModalModule,
    MzSidenavModule,
    MzPaginationModule,
    MzTooltipModule,
    MzIconMdiModule,
    MzSelectModule,
    MzTextareaModule
  ],
  declarations: []
})
export class CustomMaterializeModuleModule { }
