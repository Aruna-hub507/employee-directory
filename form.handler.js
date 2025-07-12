document.getElementById("employeeForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const validEmail = /^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;

  if (!validEmail.test(email)) {
    alert("Invalid email format");
    return;
  }

  const employee = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    department: form.department.value,
    role: form.role.value
  };

  console.log("Employee saved:", employee);
});
