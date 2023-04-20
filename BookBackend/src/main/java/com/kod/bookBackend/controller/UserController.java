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

import com.kod.bookBackend.model.User;
import com.kod.bookBackend.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@GetMapping("/getUsers")
	List<User> getUsers(){
		return this.service.getUsers();
	}
	
	@GetMapping("/getUser/{userId}")
	Optional<User> getUser(@PathVariable String userId){
		return this.service.getUser(userId);
	}
	
	@PostMapping("/addUser")
	User addUser(@RequestBody User user) {
		return this.service.addUser(user);
	}
	
	@PutMapping("/updateUser")
	User updateUser(@RequestBody User user) {
		return this.service.updateUser(user);
	}
	
	@DeleteMapping("/deleteUser/{userId}")
	private void deleteUser(@PathVariable String userId) {
		this.service.deleteUser(userId);
	}

}
