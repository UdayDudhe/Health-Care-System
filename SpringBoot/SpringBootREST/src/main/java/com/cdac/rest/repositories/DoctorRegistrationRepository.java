package com.cdac.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.rest.entities.DoctorRegistrationEntity;
@Repository
public interface DoctorRegistrationRepository extends JpaRepository<DoctorRegistrationEntity, Integer> {

}
