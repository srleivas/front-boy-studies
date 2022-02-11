<?php
include "ClasseBase.php";
?>
<form action=<?= $_SERVER['PHP_SELF'] ?> method="POST">

    <div class="d-flex flex-column align-items-start">
        <label for="nome">Nome</label>
        <input type="text" name="nome" id="nome" value=<?php isset($_POST['nome']) ? $_POST['nome'] : '' ?>>

        <label for="email">Email</label>
        <input type="text" name="email" id="email" value=<?= isset($_POST['email']) ? $_POST['email'] : '' ?>>

        <label for="username">Username</label>
        <input type="text" name="username" id="username" value=<?= isset($_POST['username']) ? $_POST['username'] : ''  ?>>

        <div>
            <button type="submit" name="submit" class="my-1 btn btn-success">Submit</button>
            <button id="dropdown" class="btn" type="button">Não conseguiu?</button>
        </div>
        
    </div>
</form>

<div class="img-div">
    <img src="" alt="" id="feedbackImg" style="display:none" draggable="false">
</div>

<?php

include('Model/Form.php');

$form = new Form;
$validator = new Validator($form);

if (isset($_POST['submit'])) {

    unset($_POST['submit']);

    $form->setValidationData($_POST);
    $validator->validate();

    $errors = $validator->getErrors();

    if (empty($errors)) {
        echo "
        <script>
            let hasError = false;
            $('#feedbackImg').attr('src', 'https://c.tenor.com/c363Rd8JBdQAAAAC/victory-you-did-it.gif').css('display', 'block');
        </script>";
    }

    if (!empty($errors)) {

        $script = [];

        foreach ($errors as $errorField => $params) {
            $message = $params['message'];

            $script[] =
                "let $errorField = $('#$errorField');
                $errorField.prev().addClass('error');
                $errorField.addClass('error-input');
                $errorField.after('<small class=\'error\'>$message</small>')";
        }

        $hasErrorScript =
            "let hasError = true;
            $('#feedbackImg').attr('src', 'https://c.tenor.com/cwSuXhgmcvIAAAAd/bolsonaro-e-dai.gif');";

        $script = "<script>$hasErrorScript\n\n" . implode("\n\n", $script) . "</script>";
        echo $script;
    }
}
?>

<script>
    function edailamento() {
        $('#dropdown').click(() => {
            $('#feedbackImg').fadeToggle();
            $('#feedbackImg').attr('src', 'https://c.tenor.com/cwSuXhgmcvIAAAAd/bolsonaro-e-dai.gif');
        })
    }
    edailamento();
</script>