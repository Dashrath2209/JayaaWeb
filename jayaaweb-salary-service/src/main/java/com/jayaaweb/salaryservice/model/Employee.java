// Employee.java
package com.jayaaweb.salaryservice.model;

import lombok.Data;
import javax.persistence.*;

@Entity
@Data
public class Employee {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String department;
  private Double salary;
}