package com.andycostanza.relveo.chart.service;

import com.andycostanza.relveo.chart.ChartContainer;
import com.andycostanza.relveo.chart.ChartValue;
import com.andycostanza.relveo.electricity.ElectricityIndexStatement;
import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class ChartServiceImplTest {
    ChartService service;
    @Before
    public void setUp() throws Exception {
        service = new ChartServiceImpl();
    }

    @Test
    public void should_electricityConsumptionCalculator_build_a_ChartContainer_collection_of_electricity_consumption() throws Exception {
        //given
        List<ElectricityIndexStatement> list = new ArrayList<>();
        list.add(ElectricityIndexStatement.builder().id(1L).statementDate(java.sql.Date.valueOf(LocalDate.of(2018,1,1))).dayIndex(
                BigDecimal.valueOf(1L)).nightIndex(BigDecimal.valueOf(1L)).build());
        list.add(ElectricityIndexStatement.builder().id(2L).statementDate(java.sql.Date.valueOf(LocalDate.of(2018,1,2))).dayIndex(BigDecimal.valueOf(2L)).nightIndex(BigDecimal.valueOf(4L)).build());
        list.add(ElectricityIndexStatement.builder().id(2L).statementDate(java.sql.Date.valueOf(LocalDate.of(2018,1,3))).dayIndex(BigDecimal.valueOf(4L)).nightIndex(BigDecimal.valueOf(8L)).build());
        //expected consumption
        List<ChartValue> dayConsumption = new ArrayList<>();
        dayConsumption.add(ChartValue.builder().name(java.sql.Date.valueOf(LocalDate.of(2018,1,2)).toString()).value(BigDecimal.valueOf(1L)).build());
        dayConsumption.add(ChartValue.builder().name(java.sql.Date.valueOf(LocalDate.of(2018,1,3)).toString()).value(BigDecimal.valueOf(2L)).build());
        List<ChartValue> nightConsumption = new ArrayList<>();
        nightConsumption.add(ChartValue.builder().name(java.sql.Date.valueOf(LocalDate.of(2018,1,2)).toString()).value(BigDecimal.valueOf(3L)).build());
        nightConsumption.add(ChartValue.builder().name(java.sql.Date.valueOf(LocalDate.of(2018,1,3)).toString()).value(BigDecimal.valueOf(4L)).build());
        PageImpl page = new PageImpl(list);
        //when
        List<ChartContainer> result = service.electricityConsumptionCalculator(list);
        //then
        Assertions.assertThat(result).contains(ChartContainer.builder().name("Day Consumption").series(dayConsumption).build(), ChartContainer.builder().name("Night Consumption").series(nightConsumption).build());
    }

    @Test
    public void should_electricityConsumptionCalculator_build_an_empty_ChartContainer_collection_if_we_have_only_one_indexStatement() throws Exception {
        //given
        List<ElectricityIndexStatement> list = new ArrayList<>();
        list.add(ElectricityIndexStatement.builder().id(1L).statementDate(java.sql.Date.valueOf(LocalDate.of(2018,1,1))).dayIndex(BigDecimal.valueOf(1L)).nightIndex(BigDecimal.valueOf(1L)).build());
        PageImpl page = new PageImpl(list);
        //when
        List<ChartContainer> result = service.electricityConsumptionCalculator(list);
        //then
        Assertions.assertThat(result).isEmpty();
    }

    @Test
    public void should_electricityConsumptionCalculator_build_an_empty_ChartContainer_collection_if_there_is_not_indexStatement() throws Exception {
        //given
        //when
        List<ChartContainer> result = service.electricityConsumptionCalculator(null);
        //then
        Assertions.assertThat(result).isEmpty();
    }
}