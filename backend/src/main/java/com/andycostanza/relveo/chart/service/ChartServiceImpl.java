package com.andycostanza.relveo.chart.service;

import com.andycostanza.relveo.chart.ChartContainer;
import com.andycostanza.relveo.chart.ChartValue;
import com.andycostanza.relveo.electricity.ElectricityIndexStatement;
import com.andycostanza.relveo.heating.HeatingIndexStatement;
import com.andycostanza.relveo.water.WaterIndexStatement;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
@Service
@Slf4j
public class ChartServiceImpl implements ChartService {
    @Override
    public List<ChartContainer> electricityConsumptionCalculator(List<ElectricityIndexStatement> indexStatements) {
        List<ChartContainer> chartContainers = new ArrayList<>();
        List<ChartValue> dayConsumptionChartValue = new ArrayList<>();
        List<ChartValue> nightConsumptionChartValue = new ArrayList<>();
        List<ChartValue> totalConsumptionChartValue = new ArrayList<>();
        if(indexStatements!=null
                && CollectionUtils.isNotEmpty(indexStatements)
                && indexStatements.size()>1) {
            Collections.sort(indexStatements);
            for (int i = 1; i < indexStatements.size(); i++) {
                ElectricityIndexStatement indexStatement = indexStatements.get(i);
                ElectricityIndexStatement previousIndexStatement = indexStatements.get(i - 1);
                BigDecimal dayConsumption = indexStatement.getDayIndex().subtract(previousIndexStatement.getDayIndex());
                log.debug("Day Consumption of " + indexStatement.getStatementDate()
                        .toString() + " is " + dayConsumption);
                dayConsumptionChartValue.add(ChartValue.builder()
                        .name(indexStatement.getStatementDate().toString())
                        .value(dayConsumption)
                        .build());
                BigDecimal nightConsumption = indexStatement.getNightIndex().subtract(previousIndexStatement.getNightIndex());
                log.debug("Night Consumption of " + indexStatement.getStatementDate()
                        .toString() + " is " + nightConsumption);
                nightConsumptionChartValue.add(ChartValue.builder()
                        .name(indexStatement.getStatementDate().toString())
                        .value(nightConsumption)
                        .build());
                totalConsumptionChartValue.add(ChartValue.builder()
                        .name(indexStatement.getStatementDate().toString())
                        .value(dayConsumption.add(nightConsumption))
                        .build());
            }
            chartContainers.add(ChartContainer.builder()
                    .name("Day Consumption")
                    .series(dayConsumptionChartValue)
                    .build());
            chartContainers.add(ChartContainer.builder()
                    .name("Night Consumption")
                    .series(nightConsumptionChartValue)
                    .build());
            chartContainers.add(ChartContainer.builder()
                    .name("Total Consumption")
                    .series(totalConsumptionChartValue)
                    .build());
        }
        return chartContainers;
    }

    @Override
    public List<ChartContainer> heatingConsumptionCalculator(List<HeatingIndexStatement> indexStatements) {
        List<ChartContainer> chartContainers = new ArrayList<>();
        List<ChartValue> consumptionChartValue = new ArrayList<>();
        if(indexStatements!=null
                && CollectionUtils.isNotEmpty(indexStatements)
                && indexStatements.size()>1) {
            Collections.sort(indexStatements);
            for (int i = 1; i < indexStatements.size(); i++) {
                HeatingIndexStatement indexStatement = indexStatements.get(i);
                HeatingIndexStatement previousIndexStatement = indexStatements.get(i - 1);
                BigDecimal consumption = (indexStatement.getHeightOfTank().subtract(previousIndexStatement.getHeightOfTank())).multiply(BigDecimal.valueOf(-30));
                log.debug("Heating Consumption of " + indexStatement.getStatementDate()
                        .toString() + " is " + consumption);
                consumptionChartValue.add(ChartValue.builder()
                        .name(indexStatement.getStatementDate().toString())
                        .value(consumption)
                        .build());
            }
            chartContainers.add(ChartContainer.builder()
                    .name("Heating consumption")
                    .series(consumptionChartValue)
                    .build());
        }
        return chartContainers;
    }

    @Override
    public List<ChartContainer> waterConsumptionCalculator(List<WaterIndexStatement> indexStatements) {
        List<ChartContainer> chartContainers = new ArrayList<>();
        List<ChartValue> consumptionChartValue = new ArrayList<>();
        if(indexStatements!=null
                && CollectionUtils.isNotEmpty(indexStatements)
                && indexStatements.size()>1) {
            Collections.sort(indexStatements);
            for (int i = 1; i < indexStatements.size(); i++) {
                WaterIndexStatement indexStatement = indexStatements.get(i);
                WaterIndexStatement previousIndexStatement = indexStatements.get(i - 1);
                BigDecimal consumption = indexStatement.getWaterIndex().subtract(previousIndexStatement.getWaterIndex());
                log.debug("Water Consumption of " + indexStatement.getStatementDate()
                        .toString() + " is " + consumption);
                consumptionChartValue.add(ChartValue.builder()
                        .name(indexStatement.getStatementDate().toString())
                        .value(consumption)
                        .build());
            }
            chartContainers.add(ChartContainer.builder()
                    .name("Water consumption")
                    .series(consumptionChartValue)
                    .build());
        }
        return chartContainers;
    }


}
