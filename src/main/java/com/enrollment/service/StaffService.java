package com.enrollment.service;

import java.util.List;

import com.enrollment.entity.StaffEntity;

public interface StaffService {

	StaffEntity addStaff(StaffEntity staff);
	StaffEntity getStaffById(int id);
	List<StaffEntity> getAllStaff();
}
