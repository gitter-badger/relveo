package com.andycostanza.relveo.electricity;

import com.andycostanza.relveo.ChartContainer;
import com.andycostanza.relveo.ChartValue;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/electricityIndexStatements")
@ExposesResourceFor(ElectricityIndexStatement.class)
public class ElectricityIndexStatementController {
    private final ElectricityIndexStatementRepository repository;

    @GetMapping
    public ResponseEntity findAll() {
        return ResponseEntity.ok(repository.findAll(new Sort(Sort.Direction.DESC, "statementDate")));
    }
    @GetMapping("/chart")
    public ResponseEntity buildChart(){
        List<ElectricityIndexStatement> list = repository.findAll(new Sort("statementDate"));
        ChartContainer nightIndex = ChartContainer.builder().name("Night index").build();
        nightIndex.setSeries(new ArrayList<>());
        ChartContainer dayIndex = ChartContainer.builder().name("Day index").build();
        dayIndex.setSeries(new ArrayList<>());
        for (ElectricityIndexStatement e: list) {
            ChartValue night = ChartValue.builder().name(e.getStatementDate().toString()).value(e.getNightIndex()).build();
            ChartValue day = ChartValue.builder().name(e.getStatementDate().toString()).value(e.getDayIndex()).build();
            nightIndex.getSeries().add(night);
            dayIndex.getSeries().add(day);
        }
        return ResponseEntity.ok(Arrays.asList(dayIndex,nightIndex));
    }

    @GetMapping("/{id}")
    public ResponseEntity findOne(@PathVariable("id") Long id) {
        return ResponseEntity.ok(repository.findOne(id));
    }

    @PostMapping
    public ResponseEntity create(@RequestBody ElectricityIndexStatement electricityIndexStatement) {
        Assert.notNull(electricityIndexStatement, "The body could not be null or empty");
        return ResponseEntity.ok(repository.save(electricityIndexStatement));
    }

    @PutMapping()
    public ResponseEntity update(@RequestBody ElectricityIndexStatement electricityIndexStatement) {
        Assert.notNull(electricityIndexStatement, "The body could not be null or empty");
        return ResponseEntity.ok(repository.save(electricityIndexStatement));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id) {
        repository.delete(id);
        return ResponseEntity.noContent().build();
    }

}
