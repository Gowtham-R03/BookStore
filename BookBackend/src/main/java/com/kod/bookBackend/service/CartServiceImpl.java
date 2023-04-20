package com.kod.bookBackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kod.bookBackend.model.Cart;
import com.kod.bookBackend.repository.CartRepository;

@Service
public class CartServiceImpl implements CartService {
	
	@Autowired
	private CartRepository repository;
	
	@Override
	public List<Cart> getCarts() {
		// TODO Auto-generated method stub
		return this.repository.findAll();
	}

	@Override
	public List<Cart> getToCarts(String toCart) {
		// TODO Auto-generated method stub
		return this.repository.findByToCart(toCart);
	}

	@Override
	public Cart addCart(Cart cart) {
		// TODO Auto-generated method stub
		return this.repository.save(cart);
	}

	@Override
	public Cart updateCart(Cart cart) {
		// TODO Auto-generated method stub
		return this.repository.save(cart);
	}

	@Override
	public void deleteCart(String id) {
		// TODO Auto-generated method stub
		this.repository.deleteById(id);
	}

}
