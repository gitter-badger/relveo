package com.andycostanza.relveo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by andy on 24/03/17.
 */
@Repository
public interface ElectricityIndexStatementRepository extends JpaRepository<ElectricityIndexStatement, Long> {
}
