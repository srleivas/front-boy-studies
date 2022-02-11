<?php
class Model
{
    public function getValidator()
    {
        return $this->_validator;
    }

    public function getValidationData()
    {
        return $this->_validationData;
    }

    public function setValidationData(array $fields)
    {
        $this->_validationData = $fields;
    }
}
