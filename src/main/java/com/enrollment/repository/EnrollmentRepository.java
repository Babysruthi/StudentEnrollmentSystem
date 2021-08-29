package com.enrollment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.enrollment.entity.EnrollmentEntity;
import com.enrollment.entity.StaffCourseAssignEntity;
import com.enrollment.exception.CourseCodeNotFoundException;
@Repository
public interface EnrollmentRepository extends JpaRepository<EnrollmentEntity,Long>{

	
	@Query("SELECT e.student.rollNo FROM EnrollmentEntity e WHERE  e.staff.id=:staffId and e.course.courseCode=:code ")
	List<Long> getStudents(@Param("code") String code,@Param("staffId") Long staffId);
}
