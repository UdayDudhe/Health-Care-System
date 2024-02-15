package com.cdac.rest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.rest.entities.DoctorRegistrationEntity;
import com.cdac.rest.entities.DummyDoctorRegistrationEntity;
import com.cdac.rest.entities.LoginEntity;
import com.cdac.rest.entities.RoleEntity;
import com.cdac.rest.services.DoctorRegistrationService;
import com.cdac.rest.services.LoginService;
import com.cdac.rest.services.RoleService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DoctorRegistrationController {

	@Autowired
	DoctorRegistrationService doctorService;

	@Autowired
	LoginService loginService;

	@Autowired
	RoleService roleService;
	@PostMapping("/registerDoctor")
	public DoctorRegistrationEntity regsiterDoctor(@RequestBody DummyDoctorRegistrationEntity ddr) {
		RoleEntity r = roleService.getRole(2);
		LoginEntity le = new LoginEntity(ddr.getUsername(),ddr.getPassword(),r,true);
		loginService.save(le);
		DoctorRegistrationEntity d = new DoctorRegistrationEntity(ddr.getFirst_name(),ddr.getLast_name(),ddr.getAddress(),ddr.getCity(),ddr.getState(),ddr.getPincode(),ddr.getPhonenumber(),ddr.getEmail(),ddr.getGender(),ddr.getDescription(),ddr.getImage(),ddr.getSpecialization(),ddr.getEducation(),le);
		ddr.setDoctor_login_id(le.getLogin_id());
		return doctorService.registerDoctor(d);
	}
}
