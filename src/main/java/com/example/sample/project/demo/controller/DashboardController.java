package com.example.sample.project.demo.controller;

import com.example.sample.project.demo.webConfigurations.MongoConfig;
import com.example.sample.project.demo.models.ExperimentsCategory;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @RequestMapping(value = "/category",method = RequestMethod.GET)
    public List<ExperimentsCategory> getExperimentRepository() throws Exception{
        MongoConfig mongoConfig=new MongoConfig();
        return mongoConfig.mongoOperations().findAll(ExperimentsCategory.class,"experiment_category");

    }
    @RequestMapping(value = "/login",method = RequestMethod.GET)
    public void userLoginIn() throws Exception{

    }


}