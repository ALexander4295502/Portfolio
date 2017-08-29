import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {BehanceService} from './behance.service';
import {routes} from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './details/details.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    DetailsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routes,
    BrowserAnimationsModule
  ],
  providers: [BehanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
