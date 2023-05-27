import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';

const routes: Routes = [
  {
    path:"",component: BaseLayoutComponent,
    children: [
      {path:"",component: HomePageComponent },
    
    ],
  },
  {
    path:"admin",component: AdminLayoutComponent,
    children: [
      {path:"products",component: ProductListComponent },
      {path:"products/add",component: ProductAddComponent },
      {path:"products/:id/update",component: ProductUpdateComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
