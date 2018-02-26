package com.andycostanza.relveo.water;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by andy on 24/03/17.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WaterIndexStatement implements Serializable {
    @Id
    @GeneratedValue
    private Long id;
    @Temporal(TemporalType.DATE)
    private Date statementDate;
    private BigDecimal waterIndex;
}
