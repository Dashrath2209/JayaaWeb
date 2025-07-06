// EmployeeRepository.java
package com.jayaaweb.salaryservice.repository;

import com.jayaaweb.salaryservice.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> { }