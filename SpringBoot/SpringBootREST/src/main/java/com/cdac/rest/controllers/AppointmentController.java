package com.cdac.rest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cdac.rest.entities.Appointment;
import com.cdac.rest.entities.PatientRegistrationEntity;
import com.cdac.rest.services.AppointmentService;
import com.cdac.rest.services.PatientRegistrationService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/appointments/bookSlot")
public class AppointmentController {
	@Autowired
	PatientRegistrationService patientservice;
	
	@Autowired
	AppointmentService appointmentService;

    @Autowired
    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping
    public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment) {
    	Integer patientLoginId = appointment.getPatientId();
		PatientRegistrationEntity patient = patientservice.getPatientByLoginId(patientLoginId);
		appointment.setPatientId(patient.getPatient_id());

        Appointment savedAppointment = appointmentService.saveAppointment(appointment);
        return new ResponseEntity<>(savedAppointment, HttpStatus.CREATED);
    }
}
