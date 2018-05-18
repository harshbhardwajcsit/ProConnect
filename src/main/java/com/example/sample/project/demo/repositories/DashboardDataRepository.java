package com.example.sample.project.demo.repositories;

import com.example.sample.project.demo.models.ExperimentsCategory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotNull;
import java.security.AllPermission;
import java.util.List;

public interface DashboardDataRepository extends MongoRepository<ExperimentsCategory,String> {

    @Override
    @Query(value = "{}")
    List<ExperimentsCategory> findAll();
}
