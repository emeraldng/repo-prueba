import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importando las rutas
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { AdminComponent } from './features/admin/admin.component';
import { AppointmentDetailComponent } from './features/appointment-detail/appointment-detail.component';
import { LoggedInRedirectGuard } from './core/auth/logged-in-redirect.guard';

// AuthGuard para las rutas protegidas
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInRedirectGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'appointment/:id', component: AppointmentDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
