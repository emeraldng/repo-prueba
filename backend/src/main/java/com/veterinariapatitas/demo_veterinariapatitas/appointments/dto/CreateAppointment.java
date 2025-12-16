package com.veterinariapatitas.demo_veterinariapatitas.appointments.dto;

import java.time.LocalDateTime;

import com.veterinariapatitas.demo_veterinariapatitas.appointments.AppointmentType;

public class CreateAppointment {
    private String customerName;
    private String petName;
    private String customerPhone;

    private AppointmentType appointmentType;
    private LocalDateTime appointmentAt;

    private String comment;

    public CreateAppointment() {
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getPetName() {
        return petName;
    }

    public void setPetName(String petName) {
        this.petName = petName;
    }

    public String getCustomerPhone() {
        return customerPhone;
    }

    public void setCustomerPhone(String customerPhone) {
        this.customerPhone = customerPhone;
    }

    public AppointmentType getAppointmentType() {
        return appointmentType;
    }

    public void setAppointmentType(AppointmentType appointmentType) {
        this.appointmentType = appointmentType;
    }

    public LocalDateTime getAppointmentAt() {
        return appointmentAt;
    }

    public void setAppointmentAt(LocalDateTime appointmentAt) {
        this.appointmentAt = appointmentAt;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
