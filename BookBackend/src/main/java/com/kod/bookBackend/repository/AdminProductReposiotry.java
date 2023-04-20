package com.kod.bookBackend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


import com.kod.bookBackend.model.AdminProducts;

@Repository
public interface AdminProductReposiotry extends MongoRepository<AdminProducts, String>{
	
	public List<AdminProducts> findByAdminProducts(String adminProducts);

}
