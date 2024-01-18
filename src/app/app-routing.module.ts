import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlsListComponent } from './components/urls-list/urls-list.component';
import { GetOriginUrlComponent } from './components/get-originUrl/get-originUrl.component';
import { GenerateShortenerUrlComponent } from './components/generate-shortenerUrl/generate-shortenerUrl.component';

const routes: Routes = [
  { path: '', redirectTo: 'urls', pathMatch: 'full' },
  { path: 'urls', component: UrlsListComponent },
  { path: 'getOriginUrl', component: GetOriginUrlComponent },
  { path: 'generateShortener', component: GenerateShortenerUrlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
