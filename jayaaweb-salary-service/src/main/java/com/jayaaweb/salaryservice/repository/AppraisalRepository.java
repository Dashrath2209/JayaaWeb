// AppraisalRepository.java
package com.jayaaweb.salaryservice.repository;

import com.jayaaweb.salaryservice.model.Appraisal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppraisalRepository extends JpaRepository<Appraisal, Long> { }