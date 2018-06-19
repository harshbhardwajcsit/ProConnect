package com.smartsolutions.shareprojects;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.data.mongodb.core.MongoOperations;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {

		SpringApplicationBuilder application = new SpringApplicationBuilder();
		ApplicationContext ctx = new AnnotationConfigApplicationContext(SpringMongo.class);
		MongoOperations mongoOperation = (MongoOperations)ctx.getBean("mongoTemplate");
		application.sources(Application.class).run(args);
	}

}
