import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from "./products/products.component";


const routes: Routes = [
{path: "products" , component : ProductsComponent} ,
{path: "footer" , component:FooterComponent} ,
{path: "home" , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
