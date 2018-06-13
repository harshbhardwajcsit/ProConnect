package com.example.sample.project.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jdk.nashorn.internal.objects.annotations.Getter;
import jdk.nashorn.internal.objects.annotations.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.print.DocFlavor;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Document(collection = "project_bucket")
public class ProjectModel implements Serializable {

    private String tag;

    private String category;

    private String createdBy;

    private String createdOn;

    private String title;

    private String description;

    private String thumbnail;

    private String myStory;

    private String projectUrl;

    private String videoUrl;

    private String repository;

    private Integer likes;

    private Integer views;

    private List<UserModel> contributors;

    private List<String> keywords;

    //setter
    public void setTag(String tag){
        this.tag=tag;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setCreatedBy(String createdBy){
        this.createdBy=createdBy;
    }

    public void setCreatedOn(String createdOn) {
        this.createdOn = createdOn;
    }

    public void setTitle(String title){
        this.title=title;
    }

    public void setDescription(String description){
        this.description=description;
    }

    public void setThumbnail(String thumbnail){
        this.thumbnail=thumbnail;
    }

    public void setMyStory(String myStory){
        this.myStory=myStory;
    }

    public void setProjectUrl(String projectUrl){
        this.projectUrl=projectUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public void setRepository(String repository) {
        this.repository = repository;
    }

    public void setContributors(List<UserModel> contributors) {
        this.contributors = contributors;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public void setViews(Integer views) {
        this.views = views;
    }

    public void setKeywords(List<String> keywords) {
        this.keywords = keywords;
    }

    //getter
    public String getTag(){
        return tag;
    }

    public String getCategory() {
        return category;
    }

    public String getCreatedBy(){
        return createdBy;
    }

    public String getCreatedOn() {
        return createdOn;
    }

    public String getTitle(){
        return title;
    }

    public String getDescription(){
        return  description;
    }

    public String getThumbnail(){
        return thumbnail;
    }

    public String getMyStory() {
        return myStory;
    }

    public String getProjectUrl() {
        return projectUrl;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public String getRepository() {
        return repository;
    }

    public List<UserModel> getContributors() {
        return contributors;
    }

    public Integer getLikes() {
        return likes;
    }

    public Integer getViews() {
        return views;
    }

    public List<String> getKeywords() {
        return keywords;
    }

    @Override
    public String toString() {
        return "ProjectModel [tag=" + tag + ", createdBy=" + createdBy + ", title=" + title + ",createdOn=" + createdOn +
                ", description=" + description + ", thumbnail=" + thumbnail + ", myStory=" + myStory +
                ", projectUrl=" + projectUrl + ", videoUrl=" + videoUrl +
                ", repository=" + repository + ", contributors=" + contributors +
                ", likes=" + likes + ", views=" + views +
                ", keywords=" + keywords+
                "]";

    }
}