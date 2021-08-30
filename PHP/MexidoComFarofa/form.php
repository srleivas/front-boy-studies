<?php
include "ClasseBase.php";
?>
<form action=<?= $_SERVER['PHP_SELF'] ?> method="POST">

    <div class="d-flex flex-column align-items-start">
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" value=<?= $_POST['nome'] ?>>

        <label for="email">Email</label>
        <input type="text" name="email" id="email" value=<?= $_POST['email'] ?>>

        <label for="username">Username</label>
        <input type="text" name="username" id="username" value=<?= $_POST['username'] ?>>

        <button type="submit" name="submit" class="my-1 btn btn-success">Submit</button>
        <button id="dropdown" class="btn" type="button">Não conseguiu?</button>
    </div>
</form>

<div class="img-div">
    <img src="" alt="" id="feedbackImg" style="display:none">
</div>

<?php
$errors = [];

if (isset($_POST['submit'])) {
    foreach ($_POST as $name => $input) {
        switch ($name) {
            case 'nome':
                empty($input) ? $errors['nome'] = 'VAZIL ZIL ZIL' : 0;
                preg_match("/\w{5,}/i", $input) ? 0 : $errors['nome'] = 'MUITO P-E-Q-U-E-N-O! Tá ok?';
                $_POST['nome'] = htmlspecialchars(trim($input));
                break;

            case 'email':
                empty($input) ? $errors['email'] = 'VAZIL ZIL ZIL' : 0;
                preg_match("/^\w+@(\w+\.)+\w{2,5}$/i", $input) ? 0 : $errors['email'] = 'ÔÔOOO cara! Ô cara!';
                $_POST['email'] = htmlspecialchars(trim($input));
                break;

            case 'username':
                empty($input) ? $errors['username'] = 'VAZIL ZIL ZIL' : 0;
                preg_match("/\w{3,}/i", $input) ? 0 : $errors['username'] = 'FALTOU VONTADE AI!';
                $_POST['username'] = htmlspecialchars(trim($input));
                break;
        }
    }

    if (!empty($errors)) {
        foreach ($errors as $errorField => $error) {
            echo "
            <script> 
            let $errorField = document.getElementById('$errorField');
            $errorField.previousElementSibling.classList.add('error');
            $errorField.classList.add('error-input');

            $errorField.insertAdjacentHTML('afterend', '<small class=\'error\'>$error</small>');

            
            </script>
            ";
        }
        echo "
        <script>
            let hasError = true;
            document.getElementById('feedbackImg').setAttribute('src', 'https://c.tenor.com/cwSuXhgmcvIAAAAd/bolsonaro-e-dai.gif');
        </script>";
    }
    if (empty($errors)) {
        echo "
        <script>
            let hasError = false;
            $('#feedbackImg').attr('src', 'https://c.tenor.com/c363Rd8JBdQAAAAC/victory-you-did-it.gif').css('display', 'block');
        </script>";
    }
}
?>

<script>
    function edailamento() {
        if (!hasError) {
            $('#dropdown').hide();
        }
        if (hasError) {
            $('#dropdown').click(() => {
                $('#feedbackImg').fadeToggle();

            })
        }
    }
    edailamento();
</script>