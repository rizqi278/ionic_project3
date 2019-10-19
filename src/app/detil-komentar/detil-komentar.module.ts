import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetilKomentarPage } from './detil-komentar.page';

const routes: Routes = [
  {
    path: '',
    component: DetilKomentarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetilKomentarPage]
})
export class DetilKomentarPageModule {}
