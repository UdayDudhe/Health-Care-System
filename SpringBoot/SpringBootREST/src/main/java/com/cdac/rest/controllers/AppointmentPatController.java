package com.cdac.rest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.rest.entities.Appointment;
import com.cdac.rest.entities.AppointmentPatientAssociationEntity;
import com.cdac.rest.entities.DoctorRegistrationEntity;
import com.cdac.rest.repositories.AppointmentPatRepository;
import com.cdac.rest.services.DoctorRegistrationService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/appointments")
public class AppointmentPatController {
	
	@Autowired
	DoctorRegistrationService doctorService;
	
	@Autowired
	AppointmentPatRepository appointmentPatService;
	
	   @GetMapping("/getAscAppointments/{doctorId}/{appointmentDate}")
	    public ResponseEntity<List<AppointmentPatientAssociationEntity>> getAppointmentsByDateAndDoctorId(
	    		@PathVariable("doctorId") Integer doctorId,
	    		@PathVariable("appointmentDate") String appointmentDate) {
	    	
	        DoctorRegistrationEntity doctor = doctorService.findDoctorById(doctorId);
	         doctorId= doctor.getDoctorid();
	        List<AppointmentPatientAssociationEntity> appointments = appointmentPatService.findByDoctorIdAndAppointmentDate(doctorId, appointmentDate);
	        return new ResponseEntity<>(appointments, HttpStatus.OK);
	    }

}
