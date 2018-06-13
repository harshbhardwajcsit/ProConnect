package com.example.sample.project.demo.controller;

import com.example.sample.project.demo.webConfigurations.MongoConfig;
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

    @RequestMapping(value = "title/{title}")
    public ProjectModel getProjectWithTitle(@PathVariable("title") String title){
        MongoConfig mongoConfig=new MongoConfig();
        ProjectModel projectModel=new ProjectModel();

        Query query = new Query();
        System.out.println(title);
        query.addCriteria(Criteria.where("title").is(title));
        try {
            projectModel=mongoConfig.mongoOperations().findOne(query,ProjectModel.class);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return projectModel;

    }

}
