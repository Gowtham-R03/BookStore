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

import com.kod.bookBackend.model.AdminProducts;
import com.kod.bookBackend.service.AdminProductService;

@RestController
@RequestMapping("/AdminProduct")
public class AdminProductController {
	
	@Autowired
	private AdminProductService service;
	
	@GetMapping("/getProducts")
	List<AdminProducts> getProducts(){
		return this.service.getProducts();
	}
	
	@GetMapping("/getAdminProducts/{adminProducts}")
	List<AdminProducts> getAdminProducts(@PathVariable String adminProducts){
		return this.service.getAdminProducts(adminProducts);
	}
	
	@PostMapping("/addAdminProducts")
	AdminProducts addProducts(@RequestBody AdminProducts products) {
		return this.service.addProducst(products);
	}
	
	@PutMapping("/updateAdminProducts")
	AdminProducts updateProducts(@RequestBody AdminProducts products) {
		return this.service.updateProducst(products);
	}
	
	@DeleteMapping("/deleteProduct/{id}")
	private void deleteProduct(@PathVariable String id) {
		this.service.deleteProducts(id);
	}
	
}
