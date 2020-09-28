import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Cloudinary as CloudinaryCore } from 'cloudinary-core';
import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {NgsRevealModule} from 'ng-scrollreveal';
import { LoadingModule } from 'ngx-loading';

import cloudinaryConfiguration from './config';
export const cloudinary = {
  Cloudinary: CloudinaryCore
};
export const config: CloudinaryConfiguration = cloudinaryConfiguration;

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
import { CdnImageComponent } from './cdn-image/cdn-image.component';
import { LoaderComponent } from './loader/loader.component';

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
    GuidesComponent,
    CdnImageComponent,
    LoaderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    CloudinaryModule.forRoot(cloudinary, config),
    ScrollToModule.forRoot(),
    NgsRevealModule.forRoot(),
    BrowserAnimationsModule,
    LoadingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    RouterModule,
    LoaderComponent
  ],
  providers: [
    JsonService,
    LoaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
