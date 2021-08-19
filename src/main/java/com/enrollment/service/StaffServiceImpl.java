package com.enrollment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enrollment.entity.StaffEntity;
import com.enrollment.repository.StaffRepository;

@Service
public class StaffServiceImpl implements StaffService {

	@Autowired
	StaffRepository staffRepository;
	
	@Override
	public StaffEntity addStaff(StaffEntity staff) {
		
		return staffRepository.save(staff);
	}

	@Override
	public StaffEntity getStaffById(int id) {
		
		return staffRepository.findById(id).get();
	}

	@Override
	public List<StaffEntity> getAllStaff() {
		
		return staffRepository.findAll();
	}

}
