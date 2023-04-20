package com.kod.bookBackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kod.bookBackend.model.Admin;
import com.kod.bookBackend.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
	
	@Autowired
	private AdminService service;
	
	@GetMapping("/getAdmins")
	List<Admin> getAdmins(){
		return this.service.getAdmins();
	}
	
	@GetMapping("/getAdmin/{adminId}")
	Optional<Admin> getAdmin(@PathVariable String adminId){
		return this.service.getAdmin(adminId);
	}
	
	@PostMapping("/addAdmin")
	Admin addAdmin(@RequestBody Admin admin) {
		return this.service.addAdmin(admin);
	}
	
	@PutMapping("/updateAdmin")
	Admin updateAdmin(@RequestBody Admin admin) {
		return this.service.addAdmin(admin);
	}
	
	@DeleteMapping("/deleteAdmin/{adminId}")
	private void deleteAdmin(@PathVariable String adminId) {
		this.service.deleteAdmin(adminId);
	}

}
