package com.andycostanza.relveo.heating;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by andy on 24/03/17.
 */
@Repository
public interface HeatingIndexStatementRepository extends JpaRepository<HeatingIndexStatement, Long> {
}
