# JayaaWeb Salary Appraisal Service

## Overview
Spring Boot service for computing employee appraisals and updating salaries.

## Tech
- Java 11, Spring Boot, Hibernate
- MySQL, Thymeleaf, Maven

## Setup
1. Create MySQL schema `jayaaweb`  
2. Update credentials in `application.properties`  
3. `mvn clean install`  
4. `mvn spring-boot:run` (on port 8081)

## Usage
- Visit `http://localhost:8081/appraisals`  
- Select employee, input KPI & DSA scores  
- Submit to see recommendation & updated salary  

## Next
- Expose REST endpoints for Node.js integration  
- Attach AI feedback summary microservice  
- Add Spring Security for auth  