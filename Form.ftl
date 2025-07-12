<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Add/Edit Employee</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <h2>Add/Edit Employee</h2>
  <form id="employeeForm">
    <input type="text" name="firstName" placeholder="First Name" required />
    <input type="text" name="lastName" placeholder="Last Name" required />
    <input type="email" name="email" placeholder="Email" required />
    <input type="text" name="department" placeholder="Department" required />
    <input type="text" name="role" placeholder="Role" required />
    <button type="submit">Save</button>
  </form>

  <script src="js/form-handler.js"></script>
</body>
</html>
