package com.andycostanza.relveo.water;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.http.ResponseEntity;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/waterIndexStatements")
@ExposesResourceFor(WaterIndexStatement.class)
public class WaterIndexStatementController {
    private final WaterIndexStatementRepository repository;

    @GetMapping
    public ResponseEntity findAll() {
        return ResponseEntity.ok(repository.findAll(new Sort(Sort.Direction.DESC, "statementDate")));
    }

    @GetMapping("/{id}")
    public ResponseEntity findOne(@PathVariable("id") Long id) {
        return ResponseEntity.ok(repository.findOne(id));
    }

    @PostMapping
    public ResponseEntity create(@RequestBody WaterIndexStatement waterIndexStatement) {
        Assert.notNull(waterIndexStatement, "The body could not be null or empty");
        return ResponseEntity.ok(repository.save(waterIndexStatement));
    }

    @PutMapping()
    public ResponseEntity update(@RequestBody WaterIndexStatement waterIndexStatement) {
        Assert.notNull(waterIndexStatement, "The body could not be null or empty");
        return ResponseEntity.ok(repository.save(waterIndexStatement));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id) {
        repository.delete(id);
        return ResponseEntity.noContent().build();
    }

}
