package com.andycostanza.relveo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by andy on 24/03/17.
 */
@RepositoryRestResource
public interface HeatingIndexStatementRepository extends JpaRepository<HeatingIndexStatement, Long> {
}
