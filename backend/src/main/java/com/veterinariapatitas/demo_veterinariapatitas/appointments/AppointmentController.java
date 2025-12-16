package com.veterinariapatitas.demo_veterinariapatitas.appointments;


import com.veterinariapatitas.demo_veterinariapatitas.appointments.dto.CreateAppointment;
import com.veterinariapatitas.demo_veterinariapatitas.appointments.dto.AppointmentResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {
     private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    // POST /api/appointments
    @PostMapping
    public ResponseEntity<AppointmentResponse> create(@RequestBody CreateAppointment request) {
        Appointment appointment = toModel(request);
        Appointment saved = appointmentService.create(appointment);
        AppointmentResponse response = toResponse(saved);

        // 201 Created + Location: /api/appointments/{id}
        return ResponseEntity
                .created(URI.create("/api/appointments/" + response.getId()))
                .body(response);
    }

    // GET /api/appointments
    @GetMapping
    public List<AppointmentResponse> list() {
        return appointmentService.list()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    // GET /api/appointments/{id}
    @GetMapping("/{id}")
    public AppointmentResponse getById(@PathVariable Long id) {
        Appointment appointment = appointmentService.getById(id);
        return toResponse(appointment);
    }

    // DELETE /api/appointments/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        appointmentService.deleteById(id);
        return ResponseEntity.noContent().build(); 
    }

  

    private Appointment toModel(CreateAppointment req) {
        Appointment q = new Appointment();
        q.setCustomerName(req.getCustomerName());
        q.setPetName(req.getPetName());
        q.setCustomerPhone(req.getCustomerPhone());
        q.setAppointmentType(req.getAppointmentType());
        q.setAppointmentAt(req.getAppointmentAt());
        q.setComment(req.getComment());
        return q;
    }

    private AppointmentResponse toResponse(Appointment q) {
        AppointmentResponse res = new AppointmentResponse();
        res.setId(q.getId());
        res.setCustomerName(q.getCustomerName());
        res.setPetName(q.getPetName());
        res.setCustomerPhone(q.getCustomerPhone());
        res.setAppointmentType(q.getAppointmentType());
        res.setAppoinmentAt(q.getAppointmentAt());
        res.setComment(q.getComment());
        res.setCreatedAt(q.getCreatedAt());
        return res;
    }
}
