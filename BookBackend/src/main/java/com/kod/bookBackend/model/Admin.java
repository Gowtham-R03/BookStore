package com.kod.bookBackend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection="Admin")
public class Admin {
	
	
	// adminId, adminName, adminFirstName, adminLastName, adminPassword, adminMail
	
	@Id
	private String adminId;
	
	private String adminName;
	
	private String adminFirstName;
	
	private String adminLastName;
	
	private String adminPassword;
	
	private String adminMail;

}
