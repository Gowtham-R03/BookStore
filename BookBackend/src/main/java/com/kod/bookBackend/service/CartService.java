package com.kod.bookBackend.service;

import java.util.List;

import com.kod.bookBackend.model.Cart;

public interface CartService {

	List<Cart> getCarts();

	List<Cart> getToCarts(String toCart);
	
	Cart addCart(Cart cart);
	
	Cart updateCart(Cart cart);
	
	public void deleteCart(String id);

}
