package com.smartsolutions.shareprojects;

import com.mongodb.MongoClient;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;

@Configuration
public  class MongoConfig extends AbstractMongoConfiguration{


    @Override
    public MongoClient mongoClient() {
        return new MongoClient("127.0.0.1");
    }

    @Override
    protected String getDatabaseName() {
        return "pro-connect";
    }
}
