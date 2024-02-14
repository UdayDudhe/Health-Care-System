package com.cdac.rest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.rest.entities.PatientRegistrationEntity;
import com.cdac.rest.repositories.PatientRegistrationRepository;
@Service
public class PatientRegistrationService
{
	@Autowired
	PatientRegistrationRepository prrepo;
	public PatientRegistrationEntity savePatient(PatientRegistrationEntity pre)
	{
		return prrepo.save(pre);
	}
	public List<PatientRegistrationEntity> getAll()
	{
		return prrepo.findAll();
	}

}
