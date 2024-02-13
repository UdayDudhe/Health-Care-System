package com.cdac.rest.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.rest.entities.DoctorRegistrationEntity;
import com.cdac.rest.repositories.DoctorRegistrationRepository;

@Service
public class DoctorRegistrationService {
	
	
	@Autowired
	DoctorRegistrationRepository doctorRepo;
	
	public DoctorRegistrationEntity registerDoctor(DoctorRegistrationEntity dre)
	{
		return doctorRepo.save(dre);
	}
}
