package com.smartsolutions.shareprojects.repositories;

import com.smartsolutions.shareprojects.models.ExperimentsCategory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface DashboardDataRepository extends MongoRepository<ExperimentsCategory,String> {

    @Override
    @Query(value = "{}")
    List<ExperimentsCategory> findAll();
}
