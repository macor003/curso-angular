import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './componets/search-box/search-box.component';
import { ListGifsComponent } from './componets/list-gifs/list-gifs.component';
import { GifsCardComponent } from './componets/gifs-card/gifs-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    ListGifsComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
