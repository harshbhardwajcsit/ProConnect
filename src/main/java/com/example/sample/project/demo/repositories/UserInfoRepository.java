package com.example.sample.project.demo.repositories;

import com.example.sample.project.demo.models.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;


public interface UserInfoRepository extends MongoRepository<UserModel,String> {

    @Query(value = "{ 'userName' : ?0 }")
    UserModel findByUserName(String userName);
}
