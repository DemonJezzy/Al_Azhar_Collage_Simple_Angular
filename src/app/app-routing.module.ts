import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { StaffComponent } from './staff/staff.component';
const routes: Routes = [
  { path: '', pathMatch: 'full',  redirectTo: '/home'},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactusComponent},
  { path: 'staff', component: StaffComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
