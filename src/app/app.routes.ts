/**
 * Created by zhengyuan on 2017/6/5.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {GalleryComponent} from './gallery/gallery.component';
import {DetailsComponent} from  './details/details.component';
import {ResumeComponent} from './resume/resume.component';

export const router: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'project/:id', component: DetailsComponent },
  { path: 'me', component: ResumeComponent }
];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);
