import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './component/main-page/main-page.component';
import { CartComponent } from './component/cart/cart.component';
import { FavouritesComponent } from './component/favourites/favourites.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainPageComponent},
  {path: 'cart', component: CartComponent},
  {path: 'favourites', component: FavouritesComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
