package com.example.sample.project.demo;

import org.springframework.boot.ResourceBanner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = {"http://localhost:4200"})
public class Application {

	public static void main(String[] args) {

		SpringApplicationBuilder application = new SpringApplicationBuilder();
		application.sources(Application.class).run(args);
	}

}
