package com.example.sample.project.demo.controller;

import com.example.sample.project.demo.MongoConfig;
import com.example.sample.project.demo.models.ExperimentsCategory;
import com.example.sample.project.demo.models.UserModel;
import com.example.sample.project.demo.repositories.DashboardDataRepository;
import com.example.sample.project.demo.repositories.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    DashboardDataRepository dashboardDataRepository;

    @RequestMapping(value = "/category",method = RequestMethod.GET)
    public List<ExperimentsCategory> getExperimentRepository() throws Exception{
        MongoConfig mongoConfig=new MongoConfig();
        return mongoConfig.mongoTemplate().findAll(ExperimentsCategory.class,"experiment_category");


    }


}