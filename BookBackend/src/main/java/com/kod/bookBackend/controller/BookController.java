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

import com.kod.bookBackend.model.Book;
import com.kod.bookBackend.service.BookService;

@RestController
@RequestMapping("/bookHome")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {
	
	@Autowired
	private BookService service;
	
	@GetMapping("/getBooks")
	private List<Book> getBooks(){
		return this.service.getBooks();
	}
	
	@GetMapping("/getBook/{id}")
	private Optional<Book> getBook(@PathVariable String id) {
		return this.service.getBook(id);
	}
	
	@PostMapping("/addBook")
	private Book addBook(@RequestBody Book book) {
		return this.service.addBook(book);
	}
	
	@PutMapping("/updateBook")
	private Book updateBook(@RequestBody Book book) {
		return this.service.addBook(book);
	}
	
	@DeleteMapping("/deleteBook/{id}")
	private void deleteBook(@PathVariable String id) {
		this.service.deleteBook(id);
	}
	
	@GetMapping("/get/{adminProduct}")
	public List<Book> getFavoritedBy(@PathVariable String adminProduct){
		return this.service.getAdminProducts(adminProduct);
	}
	
	@GetMapping("/getCart/{toCart}")
	public List<Book> getToCart(@PathVariable String toCart){
		return this.service.getToCart(toCart);
	}
	
	@GetMapping("/getOrder/{orderBy}")
	public List<Book> getOrderBy(@PathVariable String orderBy){
		return this.service.getOrderBy(orderBy);
	}

}
