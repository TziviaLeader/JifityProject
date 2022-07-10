import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AllApplicationsComponent } from './Components/all-applications/all-applications.component';
import { ApplicationDetailsComponent } from './Components/application-details/application-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  { path: '',redirectTo:'/applicationsList',pathMatch:"full"},
  { path: 'applicationsList', component: AllApplicationsComponent },
  { path: 'applicationDetails/:applicationId', component: ApplicationDetailsComponent },
  { path: '**', component: NotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
