package com.cdac.rest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cdac.rest.entities.Appointment;
import com.cdac.rest.entities.DoctorRegistrationEntity;
import com.cdac.rest.entities.PatientRegistrationEntity;
import com.cdac.rest.services.AppointmentService;
import com.cdac.rest.services.DoctorRegistrationService;
import com.cdac.rest.services.PatientRegistrationService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/appointments")
public class AppointmentController {
	@Autowired
	PatientRegistrationService patientservice;
	
	@Autowired
	AppointmentService appointmentService;
	
	@Autowired
	DoctorRegistrationService doctorService;

    @Autowired
    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping("/bookSlot")
    public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment) {
    	Integer patientLoginId = appointment.getPatientId();
		PatientRegistrationEntity patient = patientservice.getPatientByLoginId(patientLoginId);
		appointment.setPatientId(patient.getPatient_id());

        Appointment savedAppointment = appointmentService.saveAppointment(appointment);
        return new ResponseEntity<>(savedAppointment, HttpStatus.CREATED);
    }
    
    @GetMapping("/getAppointments/{doctorId}/{appointmentDate}")
    public ResponseEntity<List<Appointment>> getAppointmentsByDateAndDoctorId(
    		@PathVariable("doctorId") Integer doctorId,
    		@PathVariable("appointmentDate") String appointmentDate) {
    	
        DoctorRegistrationEntity doctor = doctorService.findDoctorById(doctorId);
         doctorId= doctor.getDoctorid();
        List<Appointment> appointments = appointmentService.getAppointmentsByDoctorIdAndDate(doctorId, appointmentDate);
        return new ResponseEntity<>(appointments, HttpStatus.OK);
    }
    
    @PutMapping("/updatetstatus/{appointmentId}")
    public ResponseEntity<String> updateAppointmentStatus(
            @PathVariable("appointmentId") Integer appointmentId,
            @RequestBody String status) {
        Appointment appointment = appointmentService.getAppointmentById(appointmentId);
        if (appointment == null) {
            return new ResponseEntity<>("Appointment not found", HttpStatus.NOT_FOUND);
        }
        appointment.setStatus(status);
        appointmentService.saveUpdateAppointment(appointment);
        return new ResponseEntity<>("Appointment status updated successfully", HttpStatus.OK);
    }
    
}
