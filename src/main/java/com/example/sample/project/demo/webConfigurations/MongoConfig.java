package com.example.sample.project.demo.webConfigurations;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;

@Configuration
public  class MongoConfig  {

    @Bean
    public Mongo mongo() throws Exception {
        return new MongoClient("127.0.0.1");
    }

    @Bean
    public MongoDbFactory mongoDbFactory() throws Exception {
        return new SimpleMongoDbFactory(new MongoClient(), "pro-connect");
    }

//     @Bean
//    public MongoTemplate mongoTemplate() throws Exception {
//
//        MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactory());
//
//        return mongoTemplate;
//
//    }

    @Bean
    public MongoOperations mongoOperations() throws Exception {
        return new MongoTemplate(mongoDbFactory());
    }


}
