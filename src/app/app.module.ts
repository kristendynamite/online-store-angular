import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AlbumComponent } from './album/album.component';
import { routing } from './app.routing';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutPageComponent,
    MarketplaceComponent,
    AlbumComponent,
    AlbumDetailComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
