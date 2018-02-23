package com.andycostanza.relveo.electricity;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by andy on 24/03/17.
 */
@Repository
public interface ElectricityIndexStatementRepository extends JpaRepository<ElectricityIndexStatement, Long> {
    List<ElectricityIndexStatement> findTop53ByOrderByStatementDateDesc();
}
