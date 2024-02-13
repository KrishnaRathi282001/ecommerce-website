import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { BolgComponent } from './bolg/bolg.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

const routes: Routes = [
  {
    path:"home",
    component: HomeComponent,
    },
  {
    path:"project",
    component:ProjectComponent,
  },
  {
    path:"bolg",
    component: BolgComponent,
  },
  {
    path:"login",
    component: LoginComponent,
  },
  {
    path:"logout",
    component: LogoutComponent,
  },
  {
    path:"service",
    component: ServicesComponent,
  },
  {
    path:"contact",
    component: ContactComponent,
  },
  {
    path:"about",
    component: AboutComponent,
    },
    {
      path:"details",
      component: CustomerDetailComponent,
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
