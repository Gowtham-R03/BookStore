package com.kod.bookBackend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.kod.bookBackend.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String>{

}
