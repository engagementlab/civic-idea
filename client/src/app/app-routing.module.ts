import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { GuidesComponent } from './guides/guides.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ModuleComponent } from './module/module.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'guides', component: GuidesComponent },
  { path: 'module/databasic', component: ModuleComponent },
  { path: 'module/media-breaker', component: ModuleComponent },
  { path: 'module/atstake', component: ModuleComponent },
  { path: 'module/emerging-citizens', component: ModuleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}