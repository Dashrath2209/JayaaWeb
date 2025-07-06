# JayaaWeb Employee Management Portal

## Overview
A Node.js + Express.js portal for managing employee records, with JWT auth, EJS views, and MongoDB.

## Features
- User registration & login (JWT cookies)
- Add / Edit / Delete employees
- Performance score tracking
- Bootstrap-styled UI

## Prerequisites
- Node.js >= 14
- MongoDB running locally or remotely

## Setup
1. Clone repo  
2. Run `npm install`  
3. Copy `.env.example` to `.env` and fill values  
4. Seed sample data: `node seeds/seedEmployees.js`  
5. Start app: `npm run dev`  

## Scripts
- `npm run dev` – start with nodemon  
- `npm start` – production start  

## Folder Structure
See project root for modular structure: `config`, `controllers`, `models`, `routes`, `views`, `public`, `seeds`.

## Next Steps
- Integrate Spring Boot salary appraisal service  
- Add AI-based feedback summaries  
- Build React DSA Playground & GitOps Dashboard  
- Implement CN monitoring module  
