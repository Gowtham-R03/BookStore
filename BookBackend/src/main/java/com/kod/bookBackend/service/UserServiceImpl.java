package com.kod.bookBackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kod.bookBackend.model.User;
import com.kod.bookBackend.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repository;
	
	@Override
	public List<User> getUsers() {
		// TODO Auto-generated method stub
		return this.repository.findAll();
	}

	@Override
	public Optional<User> getUser(String userId) {
		// TODO Auto-generated method stub
		return this.repository.findById(userId);
	}

	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
		return this.repository.save(user);
	}

	@Override
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		return this.repository.save(user);
	}

	@Override
	public void deleteUser(String UserId) {
		// TODO Auto-generated method stub
		this.repository.deleteById(UserId);
	}

}
