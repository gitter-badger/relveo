package com.andycostanza.relveo.water;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by andy on 24/03/17.
 */
@Repository
public interface WaterIndexStatementRepository extends JpaRepository<WaterIndexStatement, Long> {
    List<WaterIndexStatement> findTop53ByOrderByStatementDateDesc();
}
