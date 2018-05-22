package com.example.sample.project.demo.controller;

import com.example.sample.project.demo.Configurations.MongoConfig;
import com.example.sample.project.demo.models.UserModel;
import com.example.sample.project.demo.repositories.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserInfoRepository userInfoRepository;

    @RequestMapping(value = "save/{username}", method = RequestMethod.GET)
    public void saveUserDetails(@PathVariable("username") String username) throws Exception {
        UserModel userModel=new UserModel();
        userModel.setUserName(username);
        MongoConfig mongoConfig=new MongoConfig();
        mongoConfig.mongoOperations().insert(userModel,"userInfo");
    }

    @RequestMapping(value = "{username}", method = RequestMethod.GET)
    public UserModel getCurrentUserDetails(@PathVariable("username") String username) throws Exception {
        MongoConfig mongoConfig=new MongoConfig();
        UserModel userModel = mongoConfig.mongoOperations().findOne(Query.query(Criteria.where("userName").is(username)),UserModel.class);
        return  userModel;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<UserModel> getAllUserDetails() throws Exception {
        MongoConfig mongoConfig=new MongoConfig();
        return mongoConfig.mongoOperations().findAll(UserModel.class,"userInfo");

    }
}


