<p align="center">
  <a href="https://www.linkedin.com/in/liuchen27/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5?style=for-the-badge&logo=linkedin" alt="LinkedIn">
  </a>
  <a href="mailto:liu.chenbusiness@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
  </a>
  <a href="https://wa.me/491772289641">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp">
  </a>
</p>

## Stack
### Front
   ![Static Badge](https://img.shields.io/badge/Made_with-typescript-orange?style=for-the-badge&logo=typescript&logoColor=transparent)
   ![Static Badge](https://img.shields.io/badge/Made_with-React-orange?style=for-the-badge&logo=react)
   ![Static Badge](https://img.shields.io/badge/Made_with-formik-orange?style=for-the-badge&logo=formik&logoColor=transparent)
   ![Static Badge](https://img.shields.io/badge/Made_with-ant_design-orange?style=for-the-badge&logo=antdesign&logoColor=transparent)
   ![Static Badge](https://img.shields.io/badge/made_with-vite-orange?style=for-the-badge&logo=vite&logoColor=white)


### Back
   ![Static Badge](https://img.shields.io/badge/made_with-spring-orange?style=for-the-badge&logo=spring)
   ![Static Badge](https://img.shields.io/badge/made_with-apache_maven-orange?style=for-the-badge&logo=apachemaven)
   ![Static Badge](https://img.shields.io/badge/made_with-mysql-orange?style=for-the-badge&logo=mysql&logoColor=white)


## Overview
This project is a full-stack web application that combines a backend and frontend, structured for streamlined development, deployment, and maintenance. The backend is built with Java, using Maven for dependency management, while the frontend is built with Vite, TypeScript, and Vue/React (configured in `vite.config.ts`).

## Watch Video
[Click here to watch the video on YouTube](https://drive.google.com/file/d/1_FGK6comrvuYNIqG8Pgk8CY8gf_IYjwp/view?usp=drive_link](https://drive.google.com/file/d/1LB6Dc7Rk4l7VHJrjgDo4qlbk1rsckEcC/view?usp=sharing)

Or, you can watch it directly here:<br>
![website demo gif](https://github.com/user-attachments/assets/a91b0b1b-0a30-4498-a07c-5f8c98dc528f)<br>
![ScreenRecording2024-11-05104035-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/2aa9ea49-5394-47c4-8088-1f636b07043c)<br>
![ScreenRecording2024-11-05104035-ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/fc8c2d66-f4a4-4d8d-a533-a97c4dfcbb66)<br>


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

### 3. Configure Spring Boot Application to Use MySQL

In your `application.properties` (or `application.yml`), you need to configure the connection to the MySQL database.

Here’s an example for `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.MySQL5InnoDBDialect
```


## Usage
1. Once both the backend and frontend servers are running, you can access the application in your browser. The frontend will typically be available at http://localhost:3000 (or as specified in vite.config.ts), and the backend API at http://localhost:8080.

## Configuration
1. Backend: Configurations can be adjusted in DW-back/src/main/resources/application.properties.
2. Frontend: Environment variables and build settings can be configured in DW-front/vite.config.ts.
