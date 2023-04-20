package com.kod.bookBackend.service;

import java.util.List;

import com.kod.bookBackend.model.AdminProducts;

public interface AdminProductService {
	
	List<AdminProducts> getProducts();
	
	List<AdminProducts> getAdminProducts(String adminProducts);
	
	AdminProducts addProducst(AdminProducts products);
	
	AdminProducts updateProducst(AdminProducts products);
	
	public void deleteProducts(String id);
	
	

}
