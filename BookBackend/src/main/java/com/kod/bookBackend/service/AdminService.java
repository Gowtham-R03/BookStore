package com.kod.bookBackend.service;

import java.util.List;
import java.util.Optional;

import com.kod.bookBackend.model.Admin;

public interface AdminService {
	
	List<Admin> getAdmins();
	
	Optional<Admin> getAdmin(String adminId);
	
	Admin addAdmin(Admin admin);
	
	Admin updateAdmin(Admin admin);
	
	public void deleteAdmin(String adminId);

}
