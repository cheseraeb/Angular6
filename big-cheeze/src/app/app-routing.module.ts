import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
// import { HomeComponent } from '../home/home.component';
// import { EmployeeListComponent } from '../employee-list/employee-list.component';
// import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
// import { SignupComponent } from '../signup/signup.component';
// import { LogInComponent } from '../log-in/log-in.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'employeelist', component: EmployeeListComponent},
  { path: 'employeedetails', component: EmployeeDetailsComponent},
  { path: 'login', component: LogInComponent},
  { path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent, EmployeeListComponent, EmployeeDetailsComponent, LogInComponent, SignupComponent];