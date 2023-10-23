import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CasaComponent } from 'src/app/components/casa/casa.component';
import { Casa2Component } from 'src/app/components/casa2/casa2.component';
import { Casa3Component } from 'src/app/components/casa3/casa3.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'casa',
        component: CasaComponent
      },
      {
        path: 'casa2',
        component: Casa2Component
      },
      {
        path: 'casa3',
        component: Casa3Component
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
