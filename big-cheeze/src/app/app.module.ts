
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EmployeeService } from './employee.service';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { LogInComponent } from './log-in/log-in.component';
// import { SignupComponent } from './signup/signup.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
// import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    routingComponents,
    PageNotFoundComponent
    // LogInComponent,
    // SignupComponent,
    // EmployeeListComponent,
    // EmployeeDetailsComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
