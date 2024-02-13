package com.cdac.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.rest.entities.PatientRegistrationEntity;
@Repository
public interface PatientRegistrationRepository extends JpaRepository<PatientRegistrationEntity,Integer> {

	
}
