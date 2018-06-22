package com.smartsolutions.shareprojects.controller;

import com.smartsolutions.shareprojects.webConfigurations.MongoConfig;
import com.smartsolutions.shareprojects.models.ExperimentsCategory;
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

}