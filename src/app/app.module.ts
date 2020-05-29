import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlowersComponent } from './flowers/flowers.component';
import { AdminComponent } from './admin/admin.component';
import { FlowersAddComponent } from './flowers/flowers-add/flowers-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlowersComponent,
    AdminComponent,
    FlowersAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
