import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';


import { SharedModule } from 'primeng/api';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UnCommonPageComponent } from './pages/un-common-page/un-common-page.component';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumberPageComponent,
    UnCommonPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
