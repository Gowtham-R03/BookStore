package com.kod.bookBackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kod.bookBackend.model.Book;
import com.kod.bookBackend.repository.BookRepository;


@Service
public class BookServiceImpl implements BookService {
	
	@Autowired
	private BookRepository repository;
	
	@Override
	public List<Book> getBooks() {
		// TODO Auto-generated method stub
		return this.repository.findAll();
	}

	@Override
	public Optional<Book> getBook(String id) {
		// TODO Auto-generated method stub
		return this.repository.findById(id);
	}

	@Override
	public Book addBook(Book book) {
		// TODO Auto-generated method stub
		return this.repository.save(book);
	}

	@Override
	public Book updateBook(Book book) {
		// TODO Auto-generated method stub
		return this.repository.save(book);
	}

	@Override
	public void deleteBook(String id) {
		// TODO Auto-generated method stub
		this.repository.deleteById(id);
		
	}

	@Override
	public List<Book> getAdminProducts(String adminProducts) {
		// TODO Auto-generated method stub
		return this.repository.findByAdminProducts(adminProducts);
	}

	@Override
	public List<Book> getToCart(String toCart) {
		// TODO Auto-generated method stub
		return this.repository.findByToCart(toCart);
	}

	@Override
	public List<Book> getOrderBy(String orderBy) {
		// TODO Auto-generated method stub
		return this.repository.findByOrderBy(orderBy);
	}

}
