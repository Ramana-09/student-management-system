# 🎓 Student Management System

A full-stack Student Management System built using **Spring Boot, MySQL, HTML, CSS, and JavaScript**. This application allows users to manage student records through a simple web interface connected to a RESTful backend API.

## 🚀 Features

* ➕ Add new student
* 📋 View all students
* ✏️ Update student details
* 🗑️ Delete student
* 🔄 RESTful API integration
* 🗄️ MySQL database integration
* 🌐 Frontend and backend integration
* 🔐 CORS configuration for frontend-backend communication

## 🛠️ Technologies Used

### Backend

* Java
* Spring Boot
* Spring Web
* Spring Data JPA
* REST API
* Maven

### Frontend

* HTML
* CSS
* JavaScript

### Database

* MySQL

### Tools

* IntelliJ IDEA / Eclipse
* MySQL Workbench
* Git
* GitHub
* Postman

## 🏗️ Project Structure

```text
studentapp/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/studentapp/
│       │       ├── controller/
│       │       ├── model/
│       │       ├── repository/
│       │       └── service/
│       │
│       └── resources/
│           └── application.properties
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── pom.xml
└── README.md
```

## 🔄 Application Flow

```text
Frontend (HTML/CSS/JavaScript)
              ↓
        REST API Request
              ↓
       Spring Boot Backend
              ↓
       Service / Repository
              ↓
          MySQL Database
```

## 🔗 API Endpoints

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| GET    | `/api/students`      | Get all students  |
| GET    | `/api/students/{id}` | Get student by ID |
| POST   | `/api/students`      | Add a new student |
| PUT    | `/api/students/{id}` | Update student    |
| DELETE | `/api/students/{id}` | Delete student    |

## 🗄️ Database Configuration

Create a MySQL database and configure the database details in:

```text
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/studentdb
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

> Replace `YOUR_PASSWORD` with your local MySQL password.

## ▶️ How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/Ramana-09/student-management-system.git
```

### 2. Open the Project

Open the project in **IntelliJ IDEA** or **Eclipse**.

### 3. Configure MySQL

Create the database:

```sql
CREATE DATABASE studentdb;
```

Update your MySQL username and password in `application.properties`.

### 4. Run the Spring Boot Application

Run:

```text
StudentappApplication.java
```

The backend will start on:

```text
http://localhost:8080
```

### 5. Open the Frontend

Open the frontend `index.html` file in your browser.

Make sure the Spring Boot backend is running before using the application.

## 🧪 Testing

The REST APIs can be tested using **Postman**.

Example:

```text
GET http://localhost:8080/api/students
```

## 📌 Future Enhancements

* 🔐 User authentication and authorization
* 🔎 Search students
* 📄 Pagination
* 📊 Student dashboard
* 📱 Responsive UI improvements
* ☁️ Cloud deployment

## 🎯 Project Objective

The main objective of this project is to understand and implement **full-stack application development** using Java and Spring Boot, while integrating a frontend application with REST APIs and a MySQL database.

## 👨‍💻 Author

**Ramana S**

B.Tech – Artificial Intelligence & Data Science

GitHub: [Ramana-09](https://github.com/Ramana-09)

---

⭐ If you find this project useful, consider giving it a star!
