package com.cdac.rest.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
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
	public PatientRegistrationEntity getPatientByLoginId(int patientLoginId) 
	{
		return prrepo.findByPatient_login_id(patientLoginId);
	}
	
	 public int update_Patient(String firstname, String lastname, String paddress, long pphoneno, String pgender, String pemail, String pcity, String pstate,long ppincode,int patientLoginId)
	 {
		 return prrepo.update_Patient(firstname, lastname, paddress, pphoneno, pgender, pemail, pcity, pstate, ppincode, patientLoginId);
	 }
		/*
		 * public Optional<PatientRegistrationEntity> findPatientByCity(String pcity) {
		 * return prrepo.findPatientByCity(pcity); }
		 */

}
