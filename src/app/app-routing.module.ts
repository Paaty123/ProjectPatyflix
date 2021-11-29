import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path: 'home', component:HeaderComponent},
  {path: 'Acao', component:AcaoComponent},
  {path: 'Comedia', component:ComediaComponent},
  {path: 'Terror', component:TerrorComponent},
  {path: 'Anime', component:AnimeComponent},
  {path: 'Suspense', component:SuspenseComponent},
  {path: 'Documentario', component:DocumentarioComponent},
  {path: 'Drama', component:DramaComponent},
  {path: 'Aventura', component:AventuraComponent},
  {path: 'Musical', component:MusicalComponent},
  {path: 'Romance', component:RomanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
