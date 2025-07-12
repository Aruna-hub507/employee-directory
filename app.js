const employees = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", department: "HR", role: "Manager" },
  { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", department: "Engineering", role: "Developer" },
  { id: 3, firstName: "Alice", lastName: "Brown", email: "alice@example.com", department: "Marketing", role: "Executive" }
];

function editEmployee(id) {
  alert("Edit employee with ID: " + id);
}

function deleteEmployee(id) {
  alert("Delete employee with ID: " + id);
}

function applyFilters() {
  const name = document.getElementById("filterName").value.toLowerCase();
  const dept = document.getElementById("filterDept").value.toLowerCase();
  const role = document.getElementById("filterRole").value.toLowerCase();

  const filtered = employees.filter(emp =>
    emp.firstName.toLowerCase().includes(name) &&
    emp.department.toLowerCase().includes(dept) &&
    emp.role.toLowerCase().includes(role)
  );

  console.log("Filtered Employees:", filtered);
}
