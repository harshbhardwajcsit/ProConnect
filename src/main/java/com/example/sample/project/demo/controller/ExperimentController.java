package com.example.sample.project.demo.controller;

import com.example.sample.project.demo.Configurations.MongoConfig;
import com.example.sample.project.demo.models.ProjectModel;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api/projects")
public class ExperimentController {
    @RequestMapping(value ="{tag}")
    public List<ProjectModel> getProjectWithTag(@PathVariable("tag") String tag) throws Exception {
        MongoConfig mongoConfig=new MongoConfig();
        Query query = new Query();
        System.out.println(tag);
        query.addCriteria(Criteria.where("tag").is(tag));
       return mongoConfig.mongoOperations().find(query,ProjectModel.class);
    }
}
