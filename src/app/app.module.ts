import {  LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru'
import localeRuExtra from '@angular/common/locales/extra/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { CartComponent } from './component/cart/cart.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FavouritesComponent } from './component/favourites/favourites.component';
registerLocaleData(localeRu, 'ru', localeRuExtra);

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CartComponent,
    NavbarComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'ru'
}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
