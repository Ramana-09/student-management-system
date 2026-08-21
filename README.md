# 🎓 Student Management System

A simple full stack CRUD application to manage student records — built with **Spring Boot**, **MySQL**, and **HTML/CSS/JavaScript**.

![Java](https://img.shields.io/badge/Java-21-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-4.1.1-brightgreen)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)

## 📖 About

This project lets you add, view, and delete student records through a clean web interface. It was built as a learning project to understand how a Java backend (REST API) connects with a database and a frontend.

## ✨ Features

- ➕ Add new students (Name, Email, Department, Age)
- 📋 View all students in a table
- 🗑️ Delete a student record
- 🔄 Real-time UI updates without page reload (fetch API)

## 🛠️ Tech Stack

**Backend**
- Java 21
- Spring Boot 4.1.1
- Spring Data JPA (Hibernate)
- MySQL

**Frontend**
- HTML5
- CSS3
- Vanilla JavaScript (Fetch API)

**Tools**
- IntelliJ IDEA
- MySQL Workbench
- Maven

## 📁 Project Structure

```
studentapp/
├── src/main/java/com/example/studentapp/
│   ├── controller/StudentController.java   # REST API endpoints
│   ├── service/StudentService.java         # Business logic
│   ├── repository/StudentRepository.java   # Database access
│   ├── model/Student.java                  # Entity class
│   └── StudentappApplication.java          # Main class
├── src/main/resources/
│   └── application.properties              # DB configuration
├── student-frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── pom.xml
```

## 🚀 Getting Started

### Prerequisites
- Java 21+
- Maven
- MySQL installed and running

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/student-management-system.git
cd student-management-system
```

### 2. Create the database
```sql
CREATE DATABASE student_db;
```

### 3. Configure database credentials
Edit `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/student_db
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
```

### 4. Run the backend
```bash
mvn spring-boot:run
```
Backend runs on `http://localhost:8080`

### 5. Run the frontend
Open `student-frontend/index.html` in your browser
(or use a Live Server extension for best results)

## 🔌 API Endpoints

| Method | Endpoint              | Description           |
|--------|------------------------|------------------------|
| GET    | `/api/students`         | Get all students       |
| GET    | `/api/students/{id}`    | Get a student by ID    |
| POST   | `/api/students`         | Add a new student       |
| PUT    | `/api/students/{id}`    | Update a student        |
| DELETE | `/api/students/{id}`    | Delete a student        |

## 📸 Screenshots

*(Add a screenshot of your app here after uploading)*

## 🔮 Future Improvements

- [ ] Add Edit/Update functionality in the UI
- [ ] Add search and filter options
- [ ] Add form validation with error messages
- [ ] Add pagination for large student lists
- [ ] Deploy to a live server (Render / Railway)

👨‍💻 Author

Ramana S

B.Tech – Artificial Intelligence & Data Science

GitHub: Ramana-09


