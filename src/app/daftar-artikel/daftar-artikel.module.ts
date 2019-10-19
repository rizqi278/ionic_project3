import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DaftarArtikelPage } from './daftar-artikel.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarArtikelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DaftarArtikelPage]
})
export class DaftarArtikelPageModule {}
