package com.andycostanza.relveo.chart.service;

import com.andycostanza.relveo.chart.ChartContainer;
import com.andycostanza.relveo.chart.ChartValue;
import com.andycostanza.relveo.electricity.ElectricityIndexStatement;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

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
        if(indexStatements!=null
                && CollectionUtils.isNotEmpty(indexStatements)
                && indexStatements.size()>1) {
            Collections.sort(indexStatements);
            for (int i = 1; i < indexStatements.size(); i++) {
                ElectricityIndexStatement indexStatement = indexStatements.get(i);
                ElectricityIndexStatement previousIndexStatement = indexStatements.get(i - 1);
                long dayConsumption = indexStatement.getDayIndex() - previousIndexStatement.getDayIndex();
                log.debug("Day Consumption of " + indexStatement.getStatementDate()
                        .toString() + " is " + dayConsumption);
                dayConsumptionChartValue.add(ChartValue.builder()
                        .name(indexStatement.getStatementDate().toString())
                        .value(indexStatement.getDayIndex() - previousIndexStatement.getDayIndex())
                        .build());
                long nightConsumption = indexStatement.getNightIndex() - previousIndexStatement.getNightIndex();
                log.debug("Night Consumption of " + indexStatement.getStatementDate()
                        .toString() + " is " + nightConsumption);
                nightConsumptionChartValue.add(ChartValue.builder()
                        .name(indexStatement.getStatementDate().toString())
                        .value(indexStatement.getNightIndex() - previousIndexStatement.getNightIndex())
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
        }
        return chartContainers;
    }
}
