package com.andycostanza.relveo.water;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by andy on 24/03/17.
 */
@Repository
public interface WaterIndexStatementRepository extends JpaRepository<WaterIndexStatement, Long> {
}
