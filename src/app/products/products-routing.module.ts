import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { UnCommonPageComponent } from './pages/un-common-page/un-common-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsPageComponent,
  },
  {
    path: 'numbers',
    component: NumberPageComponent,
  },
  {
    path: 'uncommon',
    component: UnCommonPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
