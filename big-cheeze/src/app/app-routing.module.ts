import { EmployeePersonalComponent } from './employee-personal/employee-personal.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
// import { combineLatest } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: 'home', component: HomeComponent},
  { path: 'employeelist', component: EmployeeListComponent },
  {
    path: 'employeedetails',
    component: EmployeeDetailsComponent,
    children: [
      { path: 'contact', component: EmployeeContactComponent },
      { path: 'personal', component: EmployeePersonalComponent }
    ]
  },
  { path: 'employeeDetail/:id', component: EmployeeDetailComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignupComponent },
  // Wildcard always at bottom
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, EmployeeListComponent, EmployeeDetailsComponent, LogInComponent, SignupComponent,
  EmployeeDetailComponent, EmployeeContactComponent, EmployeePersonalComponent,
  PageNotFoundComponent];
