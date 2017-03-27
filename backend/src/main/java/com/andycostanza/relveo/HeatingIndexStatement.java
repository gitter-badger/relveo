package com.andycostanza.relveo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

/**
 * Created by andy on 24/03/17.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HeatingIndexStatement extends AbstractIndexStatement {

    private Integer heightOfTank;
}
