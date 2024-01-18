import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateShortenerUrlComponent } from './components/generate-shortenerUrl/generate-shortenerUrl.component';
import { GetOriginUrlComponent } from './components/get-originUrl/get-originUrl.component';
import { UrlsListComponent } from './components/urls-list/urls-list.component';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    GenerateShortenerUrlComponent,
    GetOriginUrlComponent,
    UrlsListComponent,
    GenerateShortenerUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
