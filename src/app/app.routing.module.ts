import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ExitvehichleComponent } from './exitvehichle/exitvehichle.component';
import { LevelComponent } from './level/level.component';

const appRoutes: Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponentComponent },
  { path: 'exit', component:ExitvehichleComponent},
  { path: 'level', component:LevelComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule],
})

export class AppRoutes {}

