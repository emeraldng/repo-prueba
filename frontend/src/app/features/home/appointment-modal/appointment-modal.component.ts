import { Component } from '@angular/core';
// Para el formulario de creación de cita y sus validadciones
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
// Importando el servicio para el enviar el formulario 
import { AppointmentService } from 'src/app/core/appointments/appointments.service';
// Importando el modelo para el tipo de servicio a agendar
import { AppointmentType, CreateAppointment } from 'src/app/core/appointments/appointment.model';
// Importando el modal de angular material
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { toLocalIsoNoZ } from 'src/app/shared/utils/date.utils';






@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.scss']
})
export class AppointmentModalComponent {
  isSubmitting = false;
  errorMsg = false;
  successMsg = false;

  // Validaciones del formulario
  form = this.fb.group({
    customerName: this.fb.control(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/)
    ]),

    petName: this.fb.control(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[^\d]+$/)
    ]),

    appointmentType: this.fb.control(null, [
      Validators.required
    ]),

    customerPhone: this.fb.control(null, [
      Validators.required,
      Validators.pattern(/^\d{10}$/)
    ]),

    appointmentAt: this.fb.control(null, [
      Validators.required
    ]),

    comment: this.fb.control(null, [
      Validators.maxLength(200)
    ])
  });

  constructor(
    private fb: FormBuilder,
    private appointments: AppointmentService,
    private dialogRef: MatDialogRef<AppointmentModalComponent>
  ) { }


  ngOnInit() {

  }
  // Función para enviar los datos del formulario
  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.getRawValue();


    const body = {
      customerName: v.customerName!,
      petName: v.petName!,
      customerPhone: v.customerPhone!,
      appointmentType: v.appointmentType!,
      appointmentAt: toLocalIsoNoZ(v.appointmentAt!),
      comment: v.comment ?? undefined
    };

    console.log('ENVIANDO BODY:', body);

    this.appointments.createAppointment(body).subscribe({
      next: (res) => {
        this.successMsg = true;
        console.log('OK:', res);
        setTimeout(() => {
          this.close();
        }, 2000);
      },
      error: (err) => {
        this.errorMsg = true; 
        console.error('ERROR:', err);
        setTimeout(() => {
          this.close();
        }, 2000);
      }
    });
  }


  // Función para cerrar el modal
  close(): void {
    this.dialogRef.close(false);
  }

}
