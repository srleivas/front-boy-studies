<?php
class Validator
{
    private $_errors = [];
    private $_model = [];

    public function __construct(object $model)
    {
        $this->_model = $model;
    }

    /**
     * Remove os erros de validação;
     * 
     * @return void
     */
    private function clearErrors(): void
    {
        $this->_errors = [];
    }

    /**
     * Retorna os erros;
     * 
     * @return $errors
     */
    public function getErrors(): array
    {
        return $this->_errors;
    }

    /**
     * Inicializa validação
     * 
     * @param $fields - Array com os campos a serem validados
     * 
     * @return void
     */
    public function validate(): void
    {
        $validationData = $this->_model->getValidationData();

        if (empty($validationData)) {
            return;
        };

        foreach ($validationData as $field => $value) {
            
            try {
                $this->executeRule($field, $value);
            } catch (ErrorException $e) {
                echo $e->getMessage();
            }
        }
    }

    /**
     * Executa a regra da model
     * 
     * @param $field - Campo com regra a ser executada
     * 
     * @return void
     */
    private function executeRule($field, $value)
    {
        $modelValidator = $this->_model->getValidator();

        if (!array_key_exists($field, $modelValidator)) {
            throw new ErrorException($field . ' sem regra definida.<br />');
        }

        $rules = $modelValidator[$field]['rule'];

        foreach ($rules as $rule) {

            if (method_exists($this->_model, $rule)) {
                $this->_model->$rule($value) ?: $this->buildError($field);
            };

            if (is_callable($rule)) {
                $rule($value) ?: $this->buildError($field);
            }
        }
    }

    /**
     * Normaliza a estrutura dos erros
     * 
     * @param $field - titulo da regra
     * 
     * @return void
     */
    private function buildError(string $field)
    {
        $modelValidator = $this->_model->getValidator();
        $message = '';
        $errors = [];

        if (!array_key_exists('message', $modelValidator[$field])) {
            $message = 'Não passou da validação';
        };

        $errors[$field]['message'] = $message ?: $modelValidator[$field]['message'];

        $this->_errors = array_merge($this->_errors, $errors);
    }
}
