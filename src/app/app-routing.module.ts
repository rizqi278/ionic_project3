import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'keranjang', loadChildren: './keranjang/keranjang.module#KeranjangPageModule' },
  { path: 'tambah-prod', loadChildren: './tambah-prod/tambah-prod.module#TambahProdPageModule' },
  { path: 'daftar-artikel', loadChildren: './daftar-artikel/daftar-artikel.module#DaftarArtikelPageModule' },
  { path: 'detil-artikel/[post_id]', loadChildren: './detil-artikel/detil-artikel.module#DetilArtikelPageModule' },
  { path: 'daftar-komentar', loadChildren: './daftar-komentar/daftar-komentar.module#DaftarKomentarPageModule' },
  { path: 'detil-artikel', loadChildren: './detil-artikel/detil-artikel.module#DetilArtikelPageModule' },
  { path: 'detil-komentar', loadChildren: './detil-komentar/detil-komentar.module#DetilKomentarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
