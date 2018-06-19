package com.smartsolutions.shareprojects.models;

import jdk.nashorn.internal.objects.annotations.Getter;
import jdk.nashorn.internal.objects.annotations.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "userInfo")
public final class UserModel implements Serializable {

    @Id
    private String userName;
    private String email;

    //setters
    public void setUserName(String userName){
        this.userName=userName;
    }

    public void setEmail(String email){
        this.email=email;
    }


    //getters
    public String getUserName(){
        return userName;
    }

    public String getEmail(){
        return email;
    }


    @Override
    public String toString() {
        return "UserModel [email=" + email + ", userName=" + userName+"]";
    }

    private String password;

    private String country;

    private String state;

    private String subContinent;

    private String Education;

    private String branch;

    private String linkdenAccount;

    private String githubAccount;

    private String portfolio;

    private String other;

//    private ProjectModel[] projects;


}
