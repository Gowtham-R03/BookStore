package com.kod.bookBackend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.kod.bookBackend.model.AdminProducts;
import com.kod.bookBackend.model.Cart;

public interface CartRepository extends MongoRepository<Cart, String>{
	
	public List<Cart> findByToCart(String toCart);
}
