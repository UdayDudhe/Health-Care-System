package com.cdac.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cdac.rest.entities.DoctorRegistrationEntity;
@Repository
public interface DoctorRegistrationRepository extends JpaRepository<DoctorRegistrationEntity, Integer> {

    @Query("SELECT d FROM DoctorRegistrationEntity d WHERE d.doctor_login_id.login_id = :doctorLoginId")
	DoctorRegistrationEntity findByDoctor_login_id(int doctorLoginId);
}
