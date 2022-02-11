<?php
include('Util/Validator.php');

class Form
{
    private $_validationData = [];
    private $_validator = [
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

    public function getValidator() {
        return $this->_validator;
    }

    public function getValidationData() {
        return $this->_validationData;
    }

    public function setValidationData(array $fields) {
        $this->_validationData = $fields;
    }

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
