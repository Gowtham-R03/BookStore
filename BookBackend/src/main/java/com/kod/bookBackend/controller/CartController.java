package com.kod.bookBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.kod.bookBackend.model.Cart;
import com.kod.bookBackend.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {
	
	@Autowired
	private CartService service;
	
	@GetMapping("/getCarts")
	List<Cart> getCarts(){
		return this.service.getCarts();
	}
	
	@GetMapping("/getCarts/{toCart}")
	List<Cart> getToCarts(@PathVariable String toCart){
		return this.service.getToCarts(toCart);
	}
	
	@PostMapping("/addCart")
	Cart addProducts(@RequestBody Cart cart) {
		return this.service.addCart(cart);
	}
	
	@PutMapping("/updateCart")
	Cart updateProducts(@RequestBody Cart cart) {
		return this.service.updateCart(cart);
	}
	
	@DeleteMapping("/deleteCart/{id}")
	private void deleteProduct(@PathVariable String id) {
		this.service.deleteCart(id);
	}

}
