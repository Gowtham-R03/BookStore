package com.kod.bookBackend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection="User")
public class User {
	
	// userId, userName, userFirstName, userLastName, userPassword, userMail
	
	@Id
	private String userId;
	
	private String userName;
	
	private String userFirstName;
	
	private String userLastName;
	
	private String userPassword;
	
	private String userMail;
	
	private String role;

}
