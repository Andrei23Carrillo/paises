import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AfricaComponent } from './africa/africa.component';
import { AmericaComponent } from './america/america.component';
import { AsiaComponent } from './asia/asia.component';
import { EuropaComponent } from './europa/europa.component';
import { OceaniaComponent } from './oceania/oceania.component';
import { MasinfoComponent } from './masinfo/masinfo.component';
const routes: Routes = [
  {
    path:'todos',
    component:TodosComponent,
  },
  {
    path:'africa',
    component: AfricaComponent,
  },
  {
    path:'america',
    component:AmericaComponent
  },
  {
    path:'asia',
    component:AsiaComponent
  },
  {
    path:'europa',
    component:EuropaComponent
  },
  {
    path:'oceania',
    component:OceaniaComponent
  },
  { path: "pais/:name", 
  component: MasinfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
