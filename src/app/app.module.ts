import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AcaoComponent } from './acao/acao.component';
import { ComediaComponent } from './comedia/comedia.component';
import { TerrorComponent } from './terror/terror.component';
import { AnimeComponent } from './anime/anime.component';
import { SuspenseComponent } from './suspense/suspense.component';
import { DocumentarioComponent } from './documentario/documentario.component';
import { DramaComponent } from './drama/drama.component';
import { AventuraComponent } from './aventura/aventura.component';
import { MusicalComponent } from './musical/musical.component';
import { RomanceComponent } from './romance/romance.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AcaoComponent,
    ComediaComponent,
    TerrorComponent,
    AnimeComponent,
    SuspenseComponent,
    DocumentarioComponent,
    DramaComponent,
    AventuraComponent,
    MusicalComponent,
    RomanceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
