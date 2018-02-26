package com.andycostanza.relveo.heating;

import com.andycostanza.relveo.chart.service.ChartService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/heatingIndexStatements")
@ExposesResourceFor(HeatingIndexStatement.class)
public class HeatingIndexStatementController {
    private final HeatingIndexStatementRepository repository;
    private final ChartService chartService;


    @GetMapping
    public ResponseEntity findAllPaginate(@RequestParam("page") int page, @RequestParam("size") int size) {
        return ResponseEntity.ok(repository.findAll(new PageRequest(page,
                size,
                new Sort(Sort.Direction.DESC, "statementDate"))));
    }

    @GetMapping("/chart")
    public ResponseEntity buildChart() {
        return ResponseEntity.ok(chartService.heatingConsumptionCalculator(
                repository.findTop53ByOrderByStatementDateDesc()));
    }

    @GetMapping("/{id}")
    public ResponseEntity findOne(@PathVariable("id") Long id) {
        return ResponseEntity.ok(repository.findOne(id));
    }

    @PostMapping
    public ResponseEntity create(@RequestBody HeatingIndexStatement heatingIndexStatement) {
        Assert.notNull(heatingIndexStatement, "The body could not be null or empty");
        return ResponseEntity.ok(repository.save(heatingIndexStatement));
    }

    @PutMapping()
    public ResponseEntity update(@RequestBody HeatingIndexStatement heatingIndexStatement) {
        Assert.notNull(heatingIndexStatement, "The body could not be null or empty");
        return ResponseEntity.ok(repository.save(heatingIndexStatement));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id) {
        repository.delete(id);
        return ResponseEntity.noContent().build();
    }

}
