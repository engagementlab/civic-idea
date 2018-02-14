import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { ModuleService } from './module/module.service';
import { AppRoutingModule } from './/app-routing.module';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ModuleComponent } from './module/module.component';
import { ModuleIntroComponent } from './tool-intro/tool-intro.component';
import { CleanStringPipe } from './clean-string.pipe';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'modules/:id', component: ModuleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    AppNavbarComponent,
    HomepageComponent,
    ModuleIntroComponent,
    CleanStringPipe,
    ModuleComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MessageService,
    ModuleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
