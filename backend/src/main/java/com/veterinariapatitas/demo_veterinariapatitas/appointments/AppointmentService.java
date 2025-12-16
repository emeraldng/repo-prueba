package com.veterinariapatitas.demo_veterinariapatitas.appointments;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import org.springframework.stereotype.Service;


@Service
public class AppointmentService {

    private final AppointmentStore appointmentStore;

    public AppointmentService(AppointmentStore appointmentStore) {
        this.appointmentStore = appointmentStore;
    }

    public Appointment create(Appointment appointment) {

        appointment.setCreatedAt(LocalDateTime.now());
        return appointmentStore.save(appointment);
    }

    public List<Appointment> list() {
        return appointmentStore.findAll().stream()
                .sorted(Comparator.comparing(Appointment::getAppointmentAt))
                .toList();
    }

    public Appointment getById(Long id) {
        return appointmentStore.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Appointment not found: " + id));
    }

    public void deleteById(Long id) {
        boolean deleted = appointmentStore.deleteById(id);
        if (!deleted) {
            throw new IllegalArgumentException("Appointment not found: " + id);
        }
    }

}
