package com.veterinariapatitas.demo_veterinariapatitas.appointments;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Component;


@Component
public class AppointmentStore {
    
    private final Map<Long, Appointment> storage = new ConcurrentHashMap<>();

   
    private final AtomicLong sequence = new AtomicLong(1);

   
    public Appointment save(Appointment appointment) {
        if (appointment.getId() == null) {
            appointment.setId(sequence.getAndIncrement());
        }
        storage.put(appointment.getId(), appointment);
        return appointment;
    }

    
    public Optional<Appointment> findById(Long id) {
        return Optional.ofNullable(storage.get(id));
    }

    
    public List<Appointment> findAll() {
        return new ArrayList<>(storage.values());
    }

   
    public boolean deleteById(Long id) {
        return storage.remove(id) != null;
    }
}
