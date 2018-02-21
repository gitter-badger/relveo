package com.andycostanza.relveo.electricity;

import com.andycostanza.relveo.AbstractIndexStatement;
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
public class ElectricityIndexStatement extends AbstractIndexStatement {

    private Long dayIndex;
    private Long nightIndex;


}
