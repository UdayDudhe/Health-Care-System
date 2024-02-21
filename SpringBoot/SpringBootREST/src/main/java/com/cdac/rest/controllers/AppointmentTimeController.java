package com.cdac.rest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.rest.entities.AppointmentTime;
import com.cdac.rest.entities.AppointmentTimeRequest;
import com.cdac.rest.entities.DoctorRegistrationEntity;
import com.cdac.rest.services.AppointmentTimeService;
import com.cdac.rest.services.DoctorRegistrationService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AppointmentTimeController {
    @Autowired
    private AppointmentTimeService appointmentTimeService;
    
	@Autowired
	DoctorRegistrationService doctorService;

    @PostMapping("/setappointmentSlots")
    public ResponseEntity<?> addAppointmentTimes(@RequestBody AppointmentTimeRequest request) {
        List<String> selectedSlots = request.getSelectedSlots();
        //Integer doctorId = request.getLoginId();
        Integer doctorLoginId = request.getLoginId();
        String date = request.getDate();
        DoctorRegistrationEntity doctor = doctorService.findDoctorById(doctorLoginId);
        Integer doctorId = doctor.getDoctorid();

        for (String slot : selectedSlots) {
            AppointmentTime appointmentTime = new AppointmentTime();
            appointmentTime.setDoctorId(doctorId);
            appointmentTime.setSlotStart(slot);
            appointmentTime.setFlag(1); 
            appointmentTime.setDay(date);
            appointmentTimeService.saveAppointmentTime(appointmentTime);
        }
        return  ResponseEntity.ok().build();

    }
}
