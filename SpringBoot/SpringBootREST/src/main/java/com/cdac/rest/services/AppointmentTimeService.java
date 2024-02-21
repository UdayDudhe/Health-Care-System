package com.cdac.rest.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.rest.entities.AppointmentTime;
import com.cdac.rest.repositories.AppointmentTimeRepository;

@Service
public class AppointmentTimeService {
    @Autowired
    private AppointmentTimeRepository appointmentTimeRepository;

    public AppointmentTime saveAppointmentTime(AppointmentTime appointmentTime) {
        return appointmentTimeRepository.save(appointmentTime);
    }
}
