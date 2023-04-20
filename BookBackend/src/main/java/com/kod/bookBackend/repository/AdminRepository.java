package com.kod.bookBackend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.kod.bookBackend.model.Admin;

@Repository
public interface AdminRepository extends MongoRepository<Admin, String>{

}
