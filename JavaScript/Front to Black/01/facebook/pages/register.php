<style>
  .required {
    color: #F00;
    display: none;
  }
</style>

<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
  <span class="required">* Required!</span>
  <input type="text" name="username" id="username" placeholder="Email ou telefone" autofocus="true">
  <span class="required">* Required!</span>
  <input type="password" name="psw" id="psw" placeholder="Senha">
  <!-- <button class="login-btn">Entrar</button> -->
  <a class="forget-psw" href="#">Esqueceu a senha?</a>
  <button class="new-acc-btn">Criar nova conta</button>
  <div class="hr-div"></div>
</form>

<?php
  if ($_SERVER["REQUEST_METHOD"] === "POST")
    if (empty($_POST["username"]) OR empty($_POST["psw"])) {
      echo
        "<script>
          let required = document.getElementsByClassName('required');
          for (tag of required) {
            tag.style = 'display: inline-block';
          }
        </script>";
    }
  else 
    header('location: ../userManagement/register.php');
?>



<!-- pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and 
at least 8 or more characters"-->