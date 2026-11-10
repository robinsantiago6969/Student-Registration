
const form = document.getElementById("registrationForm");
const table = document.getElementById("studentTable");

// REGISTER STUDENT
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const studentID = document.getElementById("studentID").value.trim();
    const email = document.getElementById("email").value.trim();
    const year = document.getElementById("yearLevel").value;

    // Check duplicate Student ID
    const rows = table.querySelectorAll("tr");

    for (let i = 1; i < rows.length; i++) {
        if (rows[i].cells[0].textContent === studentID) {
            alert("Student ID already exists!");
            return;
        }
    }

    // Add student to table
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = studentID;
    newRow.insertCell(1).textContent = name;
    newRow.insertCell(2).textContent = year;

    // Create Remove button
    const actionCell = newRow.insertCell(3);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.type = "button";
    removeButton.className = "remove-btn";

    removeButton.onclick = function() {
        removeStudent(removeButton);
    };

    actionCell.appendChild(removeButton);

    alert("Student registered successfully!");

    form.reset();

});

// REMOVE STUDENT
function removeStudent(button) {

    if (confirm("Are you sure you want to remove this student?")) {

        const row = button.closest("tr");
        row.remove();

        alert("Student removed successfully!");

    }

}
