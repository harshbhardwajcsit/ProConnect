package com.example.sample.project.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jdk.nashorn.internal.objects.annotations.Getter;
import jdk.nashorn.internal.objects.annotations.Setter;

import java.io.Serializable;


@JsonIgnoreProperties(ignoreUnknown = true)

public class ProjectModel implements Serializable{

    private String tag;

    private String title;

    private String description;

    private String thumbnail;

    private String myStory;

    private String projectUrl;

    private String videoUrl;

    private String repository;

}
