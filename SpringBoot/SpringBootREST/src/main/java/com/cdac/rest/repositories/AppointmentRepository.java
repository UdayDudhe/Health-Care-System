package com.cdac.rest.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.rest.entities.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {
	
    List<Appointment> findByDoctorIdAndAppointmentDate(Integer doctorId, String appointmentDate);
}
