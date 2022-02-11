<?php
include('Util/Validator.php');
include('Model/Model.php');

class Form extends Model
{
    public $_validationData = [];
    public $_validator = [
        'nome' => [
            'rule' => ['validaNome'],
            'message' => 'MUITO P-E-Q-U-E-N-O! Tá ok?'
        ],
        'email' => [
            'rule' => ['validaEmail'],
            'message' => 'ÔÔOOO cara! Ô cara!'
        ],
        'username' => [
            'rule' => ['validaUsername'],
            'message' => 'FALTOU VONTADE AI!'
        ],
        'test' => [
            'rule' => ['is_numeric'],
            // 'message' => 'Deu erro'
        ]
    ];

    public function validaNome($nome) {
        return preg_match("/\w{5,}/i", $nome);
    }

    public function validaEmail($nome) {
        return preg_match("/^\w+@(\w+\.)+\w{2,5}$/i", $nome);
    }

    public function validaUsername($nome) {
        return preg_match("/\w{5,}/i", $nome);
    }
}
