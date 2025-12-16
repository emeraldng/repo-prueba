import { Pipe, PipeTransform } from '@angular/core';

// Para transformar los tipos de citas a etiquetas como string para la UI
@Pipe({ name: 'appointmentTypeLabel' })
export class AppointmentType implements PipeTransform {

  transform(value: string | null | undefined): string {
    switch (value) {
      case 'CONSULTATION': return 'C. Médica';
      case 'DENTAL': return 'C. Dental';
      case 'DEWORMING': return 'Desparasitación';
      case 'VACCINATION': return 'Vacunas';
      case 'GROOMING': return 'Estética';
      default: return value ?? '';
    }
  }
}
