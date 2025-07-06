// Appraisal.java
package com.jayaaweb.salaryservice.model;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
public class Appraisal {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne @JoinColumn(name = "employee_id")
  private Employee employee;

  private LocalDate period;      // e.g. 2025-07-01
  private Double kpiScore;       // 0–100
  private Double dsaScore;       // 0–100
  private Double totalScore;     // computed
  private Double incrementAmount;// computed
}