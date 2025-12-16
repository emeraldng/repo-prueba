export type AppointmentType = 'CONSULTATION' | 'DENTAL' | 'DEWORMING' | 'VACCINATION' | 'GROOMING';

export interface Appointment {
    id: number;
    customerName: string;
    petName: string;
    customerPhone: string;
    appointmentType: AppointmentType;
    appointmentAt: string;
    comment?: string;
}

export interface CreateAppointment {
    customerName: string;
    petName: string;
    customerPhone: string;
    appointmentType: AppointmentType;
    appointmentAt: string;
    comment?: string;
}
