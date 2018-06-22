package com.smartsolutions.shareprojects.repositories;

import com.smartsolutions.shareprojects.models.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


public interface UserInfoRepository extends MongoRepository<UserModel,String> {

    @Query(value = "{ 'userName' : ?0 }")
    UserModel findByUserName(String userName);
}
