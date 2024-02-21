package com.cdac.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.rest.entities.AppointmentTime;

@Repository
public interface AppointmentTimeRepository extends JpaRepository<AppointmentTime, Integer> {
}
