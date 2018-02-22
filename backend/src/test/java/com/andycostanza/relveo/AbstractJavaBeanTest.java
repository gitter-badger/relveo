package com.andycostanza.relveo;


import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;
import org.apache.commons.lang3.SerializationUtils;
import org.junit.Test;
import org.meanbean.lang.Factory;
import org.meanbean.test.BeanTester;

import java.io.Serializable;
import java.time.LocalDateTime;

import static org.junit.Assert.assertEquals;

public abstract class AbstractJavaBeanTest<T> {
    protected String[] propertiesToBeIgnored;

    @Test
    public void beanIsSerializable() throws Exception {
        final T myBean = getBeanInstance();
        final byte[] serializedMyBean = SerializationUtils.serialize((Serializable) myBean);
        @SuppressWarnings("unchecked") final T deserializedMyBean = (T) SerializationUtils.deserialize(serializedMyBean);
        assertEquals(myBean, deserializedMyBean);
    }

    @Test
    public void equalsAndHashCodeContract() {
        EqualsVerifier.forClass(getBeanInstance().getClass())
                .suppress(Warning.STRICT_INHERITANCE, Warning.NONFINAL_FIELDS, Warning.INHERITED_DIRECTLY_FROM_OBJECT)
                .verify();
    }

    @Test
    public void getterAndSetterCorrectness() throws Exception {
        final BeanTester beanTester = new BeanTester();
        beanTester.getFactoryCollection().addFactory(LocalDateTime.class, new LocalDateTimeFactory());
        beanTester.testBean(getBeanInstance().getClass());
    }

    protected abstract T getBeanInstance();

    protected int getRandInt() {
        return (int) (Math.random() * 50 + 1);
    }

    /**
     * Concrete Factory that creates a LocalDateTime.
     */
    class LocalDateTimeFactory implements Factory {
        @Override
        public LocalDateTime create() {
            return LocalDateTime.now();
        }
    }
}


