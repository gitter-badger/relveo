package com.andycostanza.relveo;

import lombok.*;

import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChartContainer implements Serializable {
    private String name;
    @Singular("series")
    private List<ChartValue> series;
}
