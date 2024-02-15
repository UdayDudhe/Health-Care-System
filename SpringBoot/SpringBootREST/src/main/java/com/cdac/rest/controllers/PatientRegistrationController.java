package com.cdac.rest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.rest.entities.DummyPatientRegistrationEntity;
import com.cdac.rest.entities.LoginEntity;
import com.cdac.rest.entities.PatientRegistrationEntity;
import com.cdac.rest.entities.RoleEntity;
import com.cdac.rest.services.LoginService;
import com.cdac.rest.services.PatientRegistrationService;
import com.cdac.rest.services.RoleService;

@RestController

public class PatientRegistrationController 
{
	@Autowired
	PatientRegistrationService prserv;
	@Autowired
	RoleService roleService;
	@Autowired
	LoginService loginservice;
	@PostMapping("/registerpatient")
	public PatientRegistrationEntity registerPatient(@RequestBody DummyPatientRegistrationEntity pre)
	{
		RoleEntity r= roleService.getRole(3);
		LoginEntity l=new LoginEntity(pre.getUsername(),pre.getPassword(),r,true);
		LoginEntity le= loginservice.save(l);
		PatientRegistrationEntity p=new PatientRegistrationEntity(pre.getFirst_name(),pre.getLast_name(),pre.getaddress(),pre.getPhone_number(),pre.getGender(),pre.getEmail_id(),pre.getCity(),pre.getState(),pre.getPincode(),l);
		pre.setPatient_login_id(l.getLogin_id());
		return prserv.savePatient(p);
		
		//return
	}
	@GetMapping("/getpatient")
	public List<PatientRegistrationEntity> getAll()
	{
		return prserv.getAll();
	}

}
