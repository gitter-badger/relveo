package com.andycostanza.relveo;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by andy on 24/03/17.
 */
@RepositoryRestResource
public interface ElectricityIndexStatementRepository extends PagingAndSortingRepository<ElectricityIndexStatement, Long> {
}
