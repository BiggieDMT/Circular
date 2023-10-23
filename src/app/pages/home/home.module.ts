import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CasaComponent } from 'src/app/components/casa/casa.component';
import { Casa2Component } from 'src/app/components/casa2/casa2.component';
import { Casa3Component } from 'src/app/components/casa3/casa3.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, CasaComponent, Casa2Component, Casa3Component]
  
})
export class HomePageModule {}
