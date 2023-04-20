package com.kod.bookBackend.service;

import java.util.List;
import java.util.Optional;

import com.kod.bookBackend.model.User;

public interface UserService {
	
	List<User> getUsers();
	
	Optional<User> getUser(String userId);
	
	User addUser(User user);
	
	User updateUser(User user);
	
	public void deleteUser(String UserId);

}
