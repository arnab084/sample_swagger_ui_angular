import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './CustomComponents/user-list/user-list.component';
import { LoginComponent } from './CustomComponents/login/login.component';
import { DashboardComponent } from './CustomComponents/dashboard/dashboard.component';
import { PageNotFoundComponent } from './CustomComponents/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'userlist', component: UserListComponent },
  
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
