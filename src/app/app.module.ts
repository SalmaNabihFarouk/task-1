import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import { UserdataComponent } from './components/userdata/userdata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPipe } from './shared/search.pipe';
    
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { NgxSpinnerModule } from 'ngx-spinner';
// for HttpClient import:
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

// for Router import:
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

// for Core import:
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingInterceptor } from './shared/loading.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    UserdataComponent,
    SearchPipe,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    NgxPaginationModule,
    FormsModule,
    LoadingBarRouterModule,
    NgxSpinnerModule,
    LoadingBarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
