package com.kod.bookBackend.service;

import java.util.List;
import java.util.Optional;

import com.kod.bookBackend.model.Book;

public interface BookService {
	
	List<Book> getBooks();
	
	Optional<Book> getBook(String id);
	
	Book addBook(Book book);
	
	Book updateBook(Book book);
	
	public void deleteBook(String id);
	
	public List<Book> getAdminProducts(String adminProducts);
	
	public List<Book> getToCart(String toCart);
	
	public List<Book> getOrderBy(String orderBy);
}
