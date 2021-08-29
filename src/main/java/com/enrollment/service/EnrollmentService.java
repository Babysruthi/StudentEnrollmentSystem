package com.enrollment.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.enrollment.entity.EnrollmentEntity;
import com.enrollment.exception.CourseCodeNotFoundException;
import com.enrollment.exception.RollNoNotFoundException;
import com.enrollment.exception.StaffIdNotFoundException;

public interface EnrollmentService {
	String addEnrollmentDetails(Long rollNo,String code,Long staffId,EnrollmentEntity enrollmentDetails); //throws RollNoNotFoundException, CourseCodeNotFoundException, StaffIdNotFoundException;
	List<Long>getStudents(String code,Long staffId) throws StaffIdNotFoundException, CourseCodeNotFoundException, StaffIdNotFoundException;
}
