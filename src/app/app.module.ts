import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MapComponent } from './shared/components/map/map.component';
import { CalendarComponent } from './shared/components/calendar/calendar.component';
import { AdFullscreenComponent } from './shared/components/ad-fullscreen/ad-fullscreen.component';
import { AdBottomSmallComponent } from './shared/components/ad-bottom-small/ad-bottom-small.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    CalendarComponent,
    AdFullscreenComponent,
    AdBottomSmallComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
