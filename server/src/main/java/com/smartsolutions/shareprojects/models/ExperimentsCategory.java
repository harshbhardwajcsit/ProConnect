package com.smartsolutions.shareprojects.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Document(collection = "experiment_category")
public class ExperimentsCategory implements Serializable{

    private String tag;
    private String displayName;

    //setter

    public void setTag(String tag){
        this.tag=tag;
    }

    public void setDisplayName(String displayName){
        this.displayName=displayName;
    }

    //getters

    public String getTag(){
        return tag;
    }

    public String getDisplayName(){
        return displayName;
    }

    @Override
    public String toString() {
        return "ExperimentsCategory [tag=" + tag + ", displayName=" + displayName+"]";
    }

}
