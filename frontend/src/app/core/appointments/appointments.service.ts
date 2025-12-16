import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateAppointment } from './appointment.model';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  constructor(private http: HttpClient) { }

  createAppointment(body: CreateAppointment) {
    return this.http.post('/api/appointments', body);
  }

  listAppointments() {
    return this.http.get<any[]>('/api/appointments');
  }

  getAppointmentById(id: number) {
    return this.http.get<any>(`/api/appointments/${id}`);
  }

  deleteById(id: number) {
    return this.http.delete(`/api/appointments/${id}`);
  }
}
