package com.smartsolutions.shareprojects.repository;

import com.smartsolutions.shareprojects.models.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserModel, String> {
    UserModel findByUserName(String username);
}
