// AppraisalService.java
package com.jayaaweb.salaryservice.service;

import com.jayaaweb.salaryservice.model.Appraisal;
import com.jayaaweb.salaryservice.model.Employee;
import com.jayaaweb.salaryservice.repository.AppraisalRepository;
import com.jayaaweb.salaryservice.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDate;
import java.util.List;

@Service
public class AppraisalService {

  private final EmployeeRepository empRepo;
  private final AppraisalRepository aprRepo;

  public AppraisalService(EmployeeRepository empRepo, AppraisalRepository aprRepo) {
    this.empRepo = empRepo;
    this.aprRepo = aprRepo;
  }

  public List<Appraisal> getAll() {
    return aprRepo.findAll();
  }

  @Transactional
  public Appraisal createOrUpdate(Long empId, Double kpi, Double dsa) {
    Employee emp = empRepo.findById(empId)
      .orElseThrow(() -> new RuntimeException("Employee not found"));

    // Weighted average: 70% KPI, 30% DSA
    double total = kpi * 0.7 + dsa * 0.3;
    double increment = emp.getSalary() * (total / 100) * 0.1; 
    // max 10% of salary based on totalScore percentage

    Appraisal app = new Appraisal();
    app.setEmployee(emp);
    app.setPeriod(LocalDate.now());
    app.setKpiScore(kpi);
    app.setDsaScore(dsa);
    app.setTotalScore(total);
    app.setIncrementAmount(increment);

    // Save appraisal
    Appraisal saved = aprRepo.save(app);

    // Update employee salary
    emp.setSalary(emp.getSalary() + increment);
    empRepo.save(emp);

    return saved;
  }
}