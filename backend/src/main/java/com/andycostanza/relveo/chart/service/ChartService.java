package com.andycostanza.relveo.chart.service;

import com.andycostanza.relveo.chart.ChartContainer;
import com.andycostanza.relveo.electricity.ElectricityIndexStatement;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ChartService {
    List<ChartContainer> electricityConsumptionCalculator(List<ElectricityIndexStatement> indexStatements);
}
