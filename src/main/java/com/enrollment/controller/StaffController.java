package com.enrollment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enrollment.entity.StaffEntity;
import com.enrollment.exception.StaffIdNotFoundException;
import com.enrollment.service.StaffService;


@RestController
@RequestMapping("/staffs")
public class StaffController {

	@Autowired
	private StaffService staffService;
	
	
	@PostMapping("/addstaff")
	public ResponseEntity<String> addStaff(@RequestBody StaffEntity staff) throws StaffIdNotFoundException{
		
		StaffEntity s=staffService.addStaff(staff);
		if (s == null) {
			throw new StaffIdNotFoundException("Enter Valid Id");
		} else {
			return new ResponseEntity<String>("Staff is added successfully", new HttpHeaders(), HttpStatus.OK);
		}
	}
	
	@GetMapping("/getStaffById/{id}")
	private ResponseEntity<StaffEntity> getStaff(@PathVariable("id") int id) throws StaffIdNotFoundException {
		
		StaffEntity s = staffService.getStaffById(id);
		if (s == null) {
			throw new StaffIdNotFoundException("Id does not exist!!");
		} else {
			return new ResponseEntity<StaffEntity>(s, new HttpHeaders(), HttpStatus.OK);
		}
	}
	
	@GetMapping("/getAllStaffs")
	private ResponseEntity<List<StaffEntity>> getAllStaff() {
		List<StaffEntity> stafflist = staffService.getAllStaff();
		return new ResponseEntity<List<StaffEntity>>(stafflist, new HttpHeaders(), HttpStatus.OK);

	}
	
}
