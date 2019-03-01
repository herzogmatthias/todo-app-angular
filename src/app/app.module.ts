import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialDesignModule } from './material-design.module';
import { HomeComponent } from './home/home.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentsService } from './services/appointments.service';
import LocaleDe from '@angular/common/locales/de-AT';
import { registerLocaleData } from '@angular/common';

registerLocaleData(LocaleDe);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListDetailsComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AppointmentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
