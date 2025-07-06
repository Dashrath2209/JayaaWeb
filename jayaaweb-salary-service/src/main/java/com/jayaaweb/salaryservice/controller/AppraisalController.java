// AppraisalController.java
package com.jayaaweb.salaryservice.controller;

import com.jayaaweb.salaryservice.model.Appraisal;
import com.jayaaweb.salaryservice.model.Employee;
import com.jayaaweb.salaryservice.repository.EmployeeRepository;
import com.jayaaweb.salaryservice.service.AppraisalService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/appraisals")
public class AppraisalController {

  private final EmployeeRepository empRepo;
  private final AppraisalService service;

  public AppraisalController(EmployeeRepository empRepo, AppraisalService service) {
    this.empRepo = empRepo;
    this.service = service;
  }

  @GetMapping
  public String list(Model model) {
    List<Appraisal> all = service.getAll();
    model.addAttribute("appraisals", all);
    model.addAttribute("employees", empRepo.findAll());
    return "appraisalList";
  }

  @PostMapping("/evaluate")
  public String evaluate(
      @RequestParam Long employeeId,
      @RequestParam Double kpiScore,
      @RequestParam Double dsaScore
  ) {
    service.createOrUpdate(employeeId, kpiScore, dsaScore);
    return "redirect:/appraisals";
  }
}