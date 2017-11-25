import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';


import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ApiService } from './services/api.service';
import { HomeComponent } from './components/home/home.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FilterComponent } from './components/filter/filter.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthGuard } from './guards/auth-guard';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    PaginatorComponent,
    FilterComponent,
    ImageGridComponent,
    LogInComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  providers: [ApiService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
