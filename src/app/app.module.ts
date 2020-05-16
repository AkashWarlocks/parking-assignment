import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LevelComponent } from './level/level.component';
import { ExitvehichleComponent } from './exitvehichle/exitvehichle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    LevelComponent,
    ExitvehichleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutes,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
