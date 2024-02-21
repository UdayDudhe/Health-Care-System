package com.cdac.rest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.rest.entities.AppointmentPatientAssociationEntity;
import com.cdac.rest.repositories.AppointmentPatRepository;

@Service
public class AppointmentPatService {
	
	private final AppointmentPatRepository appointmentPatRepository;
	
	@Autowired
	  public AppointmentPatService(AppointmentPatRepository appointmentRepository) {
        this.appointmentPatRepository = appointmentRepository;
    }

	 public List<AppointmentPatientAssociationEntity> getAppointmentsByDoctorIdAndDate(Integer doctorId, String appointmentDate) {
	        return appointmentPatRepository.findByDoctorIdAndAppointmentDate(doctorId, appointmentDate);
	    }
}
