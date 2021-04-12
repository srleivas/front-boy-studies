<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Failure Page</title>

  <style>
    .red {
      border: 2px solid red;
    }

    .red:focus {
      outline: 1px solid red;
    }

    .red-text {
      color: red;
    }
  </style>
<body>

  <form action="userManagement.php">

    <label for="username">Username</label>
    <input type="text">

    <label for="psw">Password</label>
    <input type="password" class="red"> <span class="red-text">* Wrong password</span>

    <button type="submit">Login</button>
    <a href="./registerPage.php">Register</a>

  </form>
</body>

</html>