import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { JsonService } from './json.service';
import { AppRoutingModule } from './/app-routing.module';

import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

import { HomepageComponent } from './homepage/homepage.component';
import { ModuleComponent } from './module/module.component';
import { GuidesComponent } from './guides/guides.component';
import { AboutComponent } from './about/about.component';
import { ModuleIntroComponent } from './tool-intro/tool-intro.component';
import { CleanStringPipe } from './clean-string.pipe';
import { ButtonComponent } from './button/button.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'guides', component: GuidesComponent },
  { path: 'module/:id', component: ModuleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppFooterComponent,
    HomepageComponent,
    ModuleIntroComponent,
    CleanStringPipe,
    ModuleComponent,
    ButtonComponent,
    AboutComponent,
    GuidesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    JsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
