package com.kod.bookBackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kod.bookBackend.model.Admin;
import com.kod.bookBackend.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminRepository repository;
	
	@Override
	public List<Admin> getAdmins() {
		// TODO Auto-generated method stub
		return this.repository.findAll();
	}

	@Override
	public Optional<Admin> getAdmin(String adminId) {
		// TODO Auto-generated method stub
		return this.repository.findById(adminId);
	}

	@Override
	public Admin addAdmin(Admin admin) {
		// TODO Auto-generated method stub
		return this.repository.save(admin);
	}

	@Override
	public Admin updateAdmin(Admin admin) {
		// TODO Auto-generated method stub
		return this.repository.save(admin);
	}

	@Override
	public void deleteAdmin(String adminId) {
		// TODO Auto-generated method stub
		this.repository.deleteById(adminId);
	}

}
