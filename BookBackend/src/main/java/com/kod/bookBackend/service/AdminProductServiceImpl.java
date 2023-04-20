package com.kod.bookBackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kod.bookBackend.model.AdminProducts;
import com.kod.bookBackend.repository.AdminProductReposiotry;


@Service
public class AdminProductServiceImpl implements AdminProductService {
	
	@Autowired
	private AdminProductReposiotry repository;
	
	@Override
	public List<AdminProducts> getProducts() {
		// TODO Auto-generated method stub
		return this.repository.findAll();
	}

	@Override
	public List<AdminProducts> getAdminProducts(String adminProducts) {
		// TODO Auto-generated method stub
		return this.repository.findByAdminProducts(adminProducts);
	}

	@Override
	public AdminProducts addProducst(AdminProducts products) {
		// TODO Auto-generated method stub
		return this.repository.save(products);
	}

	@Override
	public AdminProducts updateProducst(AdminProducts products) {
		// TODO Auto-generated method stub
		return this.repository.save(products);
	}

	@Override
	public void deleteProducts(String id) {
		// TODO Auto-generated method stub
		this.repository.deleteById(id);
		
	}

}
