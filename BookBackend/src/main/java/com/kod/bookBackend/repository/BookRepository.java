package com.kod.bookBackend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


import com.kod.bookBackend.model.Book;

@Repository
public interface BookRepository extends MongoRepository<Book, String>{
	
	public List<Book> findByAdminProducts(String adminProducts);
	
	public List<Book> findByToCart(String toCart);
	
	public List<Book> findByOrderBy(String orderBy);

}
