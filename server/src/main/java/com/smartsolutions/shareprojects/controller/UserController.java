package com.smartsolutions.shareprojects.controller;

import com.smartsolutions.shareprojects.MongoConfig;
import com.smartsolutions.shareprojects.models.UserModel;
import com.smartsolutions.shareprojects.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @RequestMapping(value = "save/{username}", method = RequestMethod.GET)
    public void saveUserDetails(@PathVariable("username") String username) throws Exception {
//        UserModel userModel=new UserModel();
//        userModel.setUserName(username);
//        MongoConfig mongoConfig=new MongoConfig();
//        mongoConfig.mongoTemplate().insert(userModel,"userInfo");

        UserModel newUser = new UserModel();
        newUser.setUserName(username);
        userRepository.save(newUser);
    }

    @RequestMapping(value = "{username}", method = RequestMethod.GET)
    public UserModel getCurrentUserDetails(@PathVariable("username") String username) throws Exception {
        return userRepository.findByUserName(username);

    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<UserModel> getAllUserDetails() throws Exception {
        return userRepository.findAll();

    }
}


