import { getStudentsAPI, addStudentsAPI } from './api.js';

// Fields
let localStudents = [];
const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

// Arrow Functions
const renderTable = (dataArray) => {
    // Clear existing table rows
    studentTableBody.innerHTML = "";

    // Check if the array has elements
    if (dataArray.length === 0) {
        studentTableBody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center;">No student records found.</td>
            </tr>
        `;
        return;
    }

    // Create a table row for each student
    dataArray.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>
        `;

        studentTableBody.appendChild(row);
    });
};

studentForm.addEventListener('submit', (event) => {
    // Prevent the page from refreshing
    event.preventDefault();

    // Grab input values from the DOM
    const studentData = {
        firstName: document.getElementById("firstName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        email: document.getElementById("email").value.trim()
    };

    // Validate that all fields are filled
    if (!studentData.firstName || !studentData.lastName || !studentData.email) {
        alert("Please fill out all input fields!");
        return;
    }

    // Pass the data to the API
    addStudentsAPI(studentData);

    // Refresh the table
    localStudents = getStudentsAPI();
    renderTable(localStudents);

    // Clear the input fields
    studentForm.reset();
});

const initApp = () => {
    localStudents = getStudentsAPI();
    renderTable(localStudents);
};

///////////////////////////////////////////// Main
initApp();