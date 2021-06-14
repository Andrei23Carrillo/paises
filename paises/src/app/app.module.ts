import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { AfricaComponent } from './africa/africa.component';
import { AmericaComponent } from './america/america.component';
import { AsiaComponent } from './asia/asia.component';
import { EuropaComponent } from './europa/europa.component';
import { OceaniaComponent } from './oceania/oceania.component';
import { MasinfoComponent } from './masinfo/masinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AfricaComponent,
    AmericaComponent,
    AsiaComponent,
    EuropaComponent,
    OceaniaComponent,
    MasinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
