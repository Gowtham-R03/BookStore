package com.kod.bookBackend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.validation.constraints.Size;

import lombok.Data;

@Data
@Document(collection="Books")
public class Book {
	
	// Book - id, bookName, authorName, description, bookImage, toCart, adminProducts
	@Id
	private String id;
	
	private String bookName;
	
	private String authorName;
	
	private String description;
	
	@Size(max = 10000000)
	private String bookImage;
	
	private String toCart;
	
	private String adminProducts;
	
	private String userId;
	
	private int bookPrice;
	
	private String orderBy;

}
