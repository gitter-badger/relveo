package com.andycostanza.relveo.chart.service;

import com.andycostanza.relveo.chart.ChartContainer;
import com.andycostanza.relveo.electricity.ElectricityIndexStatement;
import com.andycostanza.relveo.heating.HeatingIndexStatement;
import com.andycostanza.relveo.water.WaterIndexStatement;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ChartService {
    List<ChartContainer> electricityConsumptionCalculator(List<ElectricityIndexStatement> indexStatements);

    List<ChartContainer> heatingConsumptionCalculator(List<HeatingIndexStatement> indexStatements);

    List<ChartContainer> waterConsumptionCalculator(List<WaterIndexStatement> indexStatements);
}
