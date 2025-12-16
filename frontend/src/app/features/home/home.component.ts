import { Component } from '@angular/core';
// Importando el modal de angular material
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// Importando el modal con el formulario para agendar
import { AppointmentModalComponent } from './appointment-modal/appointment-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  constructor(private dialog: MatDialog) { }

  openAppointmentModal(): void {
    this.dialog.open(AppointmentModalComponent, {
     panelClass: 'modal-appointment-form'
    });
  }
}
