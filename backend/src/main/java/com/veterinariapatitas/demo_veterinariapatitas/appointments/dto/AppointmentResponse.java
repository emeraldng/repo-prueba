package com.veterinariapatitas.demo_veterinariapatitas.appointments.dto;

import java.time.LocalDateTime;
import com.veterinariapatitas.demo_veterinariapatitas.appointments.AppointmentType;

public class AppointmentResponse {
    private Long id;

    private String customerName;
    private String petName;
    private String customerPhone;

    private AppointmentType appointmentType;
    private LocalDateTime appoinmentAt;

    private String comment;
    private LocalDateTime createdAt;

    public AppointmentResponse() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getPetName() { return petName; }
    public void setPetName(String petName) { this.petName = petName; }

    public String getCustomerPhone() { return customerPhone; }
    public void setCustomerPhone(String customerPhone) { this.customerPhone = customerPhone; }

    public AppointmentType getAppointmentType() { return appointmentType; }
    public void setAppointmentType(AppointmentType appointmentType) { this.appointmentType = appointmentType; }

    public LocalDateTime getAppointmentAt() { return appoinmentAt; }
    public void setAppoinmentAt(LocalDateTime appoinmentAt) { this.appoinmentAt = appoinmentAt; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
