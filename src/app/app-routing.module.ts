import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AboutComponent } from './public/about/about.component';
import { ContactusComponent } from './public/contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'about', component: AboutComponent,
          /*data: {
            breadcrumbs: true
          }*/
        },
        { path: 'contact', component: ContactusComponent },
        { path: 'login', component: LoginComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
