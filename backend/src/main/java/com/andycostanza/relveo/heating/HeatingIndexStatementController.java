package com.andycostanza.relveo.heating;

import lombok.RequiredArgsConstructor;
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

    @GetMapping
    public ResponseEntity findAll() {
        return ResponseEntity.ok(repository.findAll(new Sort(Sort.Direction.DESC, "statementDate")));
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
