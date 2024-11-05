# Project Name

## Overview
This project is a full-stack web application that combines a backend and frontend, structured for streamlined development, deployment, and maintenance. The backend is built with Java, using Maven for dependency management, while the frontend is built with Vite, TypeScript, and Vue/React (configured in `vite.config.ts`).

## Watch Video
[Click here to watch the video on YouTube](https://drive.google.com/file/d/1_FGK6comrvuYNIqG8Pgk8CY8gf_IYjwp/view?usp=drive_link)

Or, you can watch it directly here:
![website demo gif](https://github.com/user-attachments/assets/a91b0b1b-0a30-4498-a07c-5f8c98dc528f)

## Prerequisites
- **Java** (for the backend)
- **Maven** (or use the provided Maven wrapper in `DW-back`)
- **Node.js** and **npm** (for the frontend)

## Installation

### Backend Setup
1. Navigate to the `DW-back` directory:
   cd DW-back
   ./mvnw clean install
   ./mvnw spring-boot:run

### Frontend Setup
1. Navigate to the `DW-back` directory:
   cd DW-front
   npm install
   npm run dev

## Usage
1. Once both the backend and frontend servers are running, you can access the application in your browser. The frontend will typically be available at http://localhost:3000 (or as specified in vite.config.ts), and the backend API at http://localhost:8080.

## Configuration
1. Backend: Configurations can be adjusted in DW-back/src/main/resources/application.properties.
2. Frontend: Environment variables and build settings can be configured in DW-front/vite.config.ts.
