const API_URL = "http://localhost:8081/api/students";

const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTableBody");

// Page load aagும்போது students fetch pannு
document.addEventListener("DOMContentLoaded", fetchStudents);

// Form submit pannும்போது
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        age: document.getElementById("age").value
    };

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    })
        .then((res) => res.json())
        .then(() => {
            form.reset();
            fetchStudents();
        })
        .catch((err) => console.error("Error adding student:", err));
});

// Ella students-um fetch pannі table-la kaatu
function fetchStudents() {
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => renderTable(data))
        .catch((err) => console.error("Error fetching students:", err));
}

// Table render pannu
function renderTable(students) {
    tableBody.innerHTML = "";

    students.forEach((s) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.email}</td>
            <td>${s.department}</td>
            <td>${s.age}</td>
            <td><button class="delete-btn" onclick="deleteStudent(${s.id})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Student delete pannu
function deleteStudent(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
        .then(() => fetchStudents())
        .catch((err) => console.error("Error deleting student:", err));
}