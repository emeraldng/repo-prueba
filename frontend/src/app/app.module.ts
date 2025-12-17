import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { AdminComponent } from './features/admin/admin.component';
import { AppointmentDetailComponent } from './features/appointment-detail/appointment-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentModalComponent } from './features/home/appointment-modal/appointment-modal.component';

// Componentes de angular material
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEsMx from '@angular/common/locales/es-MX';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
// Importar el módulo de Material Sidenav
import { MatSidenavModule } from '@angular/material/sidenav';

// Otros imports de Material que puedas necesitar
import { MatToolbarModule } from '@angular/material/toolbar';

// import { MAT_DATE_LOCALE } from '@angular/material/core';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';
import { UI_DATE_TIME_FORMATS } from './shared/formats/date-formats';

import { CalendarModule } from 'primeng/calendar';
// Formularios
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmModalComponent } from './shared/confirm-modal/confirm-modal.component';
// import { AppointmentType } from './shared/pipes/import-type.pipe';
import { AppointmentType } from './shared/pipes/appointment-type.pipe';
import { AdminLayoutComponent } from './features/admin/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    AppointmentDetailComponent,
    AppointmentModalComponent,
    ConfirmModalComponent,
    AppointmentType,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    CalendarModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatDividerModule,
    BrowserModule,
    BrowserAnimationsModule, 
    MatSidenavModule,       
    MatToolbarModule,       
    MatIconModule,         
    MatButtonModule,         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
