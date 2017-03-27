package com.andycostanza.relveo;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by andy on 24/03/17.
 */
@Getter
@Setter
@MappedSuperclass
public abstract class AbstractIndexStatement implements Serializable {
    @Id
    @GeneratedValue
    protected Long id;
    @Temporal(TemporalType.DATE)
    protected Date statementDate;
}
