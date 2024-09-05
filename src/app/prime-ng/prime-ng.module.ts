import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    MenuModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
  ]
})
export class PrimeNgModule { }
